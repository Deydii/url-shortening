import { useState, useEffect } from 'react';
import { useQuery, setLogger } from 'react-query';
import { loadData } from '../Api';
import { Results } from '../../interfaces/results';
import Links from './Links';

import './style.scss';

const LinkForm = () => {

  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState<Results[]>([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const baseUrl:string = "https://api.shrtco.de/v2/shorten?url=";

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value);

  const { isLoading, error, data, refetch } = useQuery<Results, Error>('shortenedLink', () => loadData(`${baseUrl}${inputValue}`), 
    {
      enabled: false,
      retry: false
    }
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!inputValue) {
      setErrorMessage(true)
    } else {
      setErrorMessage(false);
      refetch();
      setInputValue("");
    }
  };

  const saveLinks = ():void => {
    if (data) {
      setLinks([...links, data])
    }
  };

  const saveLinksInLocalStorage = ():void => localStorage.setItem("links", JSON.stringify(links));

  useEffect(() => {
    if (data) {
      saveLinks()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (links.length) {
      saveLinksInLocalStorage()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [links]);

  useEffect(() => {
    const linksLocalStorage = localStorage.getItem('links');
    if (linksLocalStorage) {
      setLinks(JSON.parse(linksLocalStorage));
    }
  }, []);
  
  // Mute console error messages
  setLogger({
    log: window.console.log,
    warn: window.console.warn,
    error: () => {},
  });

  return (
    <div className="link">
      <form 
        className="link__form"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className={errorMessage ? "link__form--input link__form--input-error" : "link__form--input"}
            type="text"
            placeholder="Shorten a link here..."
            value={inputValue}
            onChange={handleOnChange}
          />
          <p className="link__form--message">{errorMessage ? "Please add a link" : ""}</p>
        </div>
        <button type="submit">Shorten It!</button>
      </form>
      {isLoading && <p className="link__message">Loading...</p>}
      {error instanceof Error ? <p className="link__message link__message--error">Something went wrong : {error.message}</p> : <p></p>}
       {!isLoading && links && (
        <>
        {links.map(link => {
          return (
            <Links
              key={link.result.code}
              originalLink={link.result.original_link}
              shortLink={link.result.full_short_link}
            />
          )
        })}
        </>
      )}
    </div>
  )
};

export default LinkForm;
