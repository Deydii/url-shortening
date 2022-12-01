import { useState } from 'react';
import logo from '../../assets/images/logo.svg';

import './style.scss';

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = ():void => {
    setIsOpen(!isOpen);
  }

  return (
  <header className="header">
    <div className="header__logo">
      <img src={logo} alt="Shortly logo" />
    </div>
    <button
      className="header__burger"
      type="button"
      onClick={handleOnClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
    <nav className={isOpen ? "header__navbar--responsive" : "header__navbar"}>
      <div>
        <ul>
          <li><a href="/">Features</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Resources</a></li> 
        </ul>
      </div>
      <div className="header__connection">
        <a href="/">Login</a>
        <button type="button">Sign Up</button>
      </div>
    </nav>
  </header>
  )
};

export default Header;