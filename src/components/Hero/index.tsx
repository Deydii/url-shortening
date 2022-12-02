import illustration from '../../assets/images/illustration-working.svg';

import './style.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h2>More than just shorter links</h2>
        <p>Build your brand's recognition and get detailed
          insights on how your links are performing.
        </p>
        <button type="button">Get Started</button>
      </div>
      <div className="hero__illustration">
        <img src={illustration} alt="illustration of a woman working" />
      </div>
    </div>
  )
};

export default Hero;