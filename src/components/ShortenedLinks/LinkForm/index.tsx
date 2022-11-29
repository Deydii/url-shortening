import './style.scss';

const LinkForm = () => {
  return (
    <div className="link">
      <form className="link__form">
        <input
          className="link__form--input"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button>Shorten It!</button>
      </form>
    </div>
  )
};

export default LinkForm;
