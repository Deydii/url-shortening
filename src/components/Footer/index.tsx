import logo from '../../assets/images/logo.svg';
import Links from './Links';
import Icons from './Icons';

import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img
          src={logo}
          alt="Shortly logo" 
        />
      </div>
      <Links />
      <Icons />
    </footer>
  )
};

export default Footer;