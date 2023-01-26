import { useState } from 'react';

import './style.scss';

interface linkInfos {
  originalLink: string,
  shortLink: string
};

const Links = ({ originalLink, shortLink}: linkInfos) => {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shortLink);
    setIsCopied(true);
  }

  return (
    <div className="links-infos">
      <div className="links-infos__section">
        <p>{originalLink}</p>
        <hr />
        <div>
          <p data-testid="shortened-link">{shortLink}</p>
          <button
            className={isCopied ? "links-infos__button links-infos__button-copy" : "links-infos__button"}
            type="button"
            onClick={handleCopyClick}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  )
};

export default Links;