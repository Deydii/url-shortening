import facebook_icon from '../../../assets/images/icon-facebook.svg';
import twitter_icon from '../../../assets/images/icon-twitter.svg';
import pinterest_icon from '../../../assets/images/icon-pinterest.svg';
import instagram_icon from '../../../assets/images/icon-instagram.svg';

import './style.scss';

const Icons = () => {
  return (
    <div className="icons">
      <a href="/">
        <img src={facebook_icon} alt="facebook icon"/>
      </a>
      <a href="/">
        <img src={twitter_icon} alt="twitter icon"/>
        </a>
      <a href="/">
        <img src={pinterest_icon} alt="pinterest icon"/>
      </a>
      <a href="/">
        <img src={instagram_icon} alt="instagram icon"/>
      </a>
    </div>
  )
};

export default Icons;