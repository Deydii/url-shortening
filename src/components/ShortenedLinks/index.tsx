import { useState } from 'react';
import { useQuery } from 'react-query';
import { loadData } from '../Api';
import Links from './Links';

import './style.scss';

const LinkForm = () => {

  const [inputValue, setInputValue] = useState("");

  const baseUrl = "https://api.shrtco.de/v2/shorten?url=";

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value);

  const { isLoading, error, data, refetch } = useQuery('shortenedLink',() => loadData(`${baseUrl}${inputValue}`),
    {
      enabled: false
    }
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    refetch();
    setInputValue("");
  };

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
      {!isLoading && data && (
        <Links
          originalLink={data.result.original_link}
          shortLink={data.result.full_short_link}
        />
      )}
    </div>
  )
};

export default LinkForm;
