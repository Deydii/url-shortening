import './style.scss';

interface linkInfos {
  originalLink: string,
  shortLink: string
}

const Links = ({ originalLink, shortLink}: linkInfos) => {
  return (
    <div className="links-infos">
      <div className="links-infos__section">
        <p>{originalLink}</p>
        <div>
          <p>{shortLink}</p>
          <button type="button">Copy</button>
        </div>
      </div>
    </div>
  )
};

export default Links;