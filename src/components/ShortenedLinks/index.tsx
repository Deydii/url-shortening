import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { loadData } from '../Api';
import { Results } from '../../interfaces/results';
import Links from './Links';

import './style.scss';

const LinkForm = () => {

  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState<Results[]>([]);

  const baseUrl = "https://api.shrtco.de/v2/shorten?url=";

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value);

  const { isLoading, error, data, refetch } = useQuery('shortenedLink', () => loadData(`${baseUrl}${inputValue}`), 
    {
      enabled: false,
    }
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    refetch();
    setInputValue("");
  };

  const saveLinks = () => {
    setLinks([...links, data]);
  }

  const saveLinksInLocalStorage = () => {
    localStorage.setItem("links", JSON.stringify(links));
  };

  useEffect(() => {
    const linksLocalStorage = localStorage.getItem('links');
    if (linksLocalStorage) {
      setLinks(JSON.parse(linksLocalStorage));
    }
  }, [])

  useEffect(() => {
    if (data) {
      saveLinks()
    }
  }, [data]);

  useEffect(() => {
    if (links.length) {
      saveLinksInLocalStorage()
    }
  }, [links]);

  return (
    <div className="link">
      <form 
        className="link__form"
        onSubmit={handleSubmit}
      >
        <input
          className="link__form--input"
          type="text"
          placeholder="Shorten a link here..."
          value={inputValue}
          onChange={handleOnChange}
        />
        <button type="submit">Shorten It!</button>
      </form>
      {isLoading && <p className="link__loading">Loading...</p>}
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
