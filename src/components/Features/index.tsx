import Content from './Content';

import './style.scss';

const Features = () => {
  return (
    <div className="features">
      <h3 className="features__title">Advanced Statistics</h3>
      <p className="features__text">
        Track how your links are performing across the web with
        <br />
        our advanced statistics dashboard.
      </p>
      <Content />
    </div>
  )
};

export default Features;