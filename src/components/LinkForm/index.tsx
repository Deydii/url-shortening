import './style.scss';

const LinkForm = () => {
  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        placeholder="Shorten a link here..."
      />
      <button>Shorten It!</button>
    </form>
  )
};

export default LinkForm;
