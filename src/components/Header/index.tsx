import logo from '../../assets/images/logo.svg';

import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Shortly logo" />
      </div>
      <nav className="header__navbar">
        <div>
          <ul>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Resources</a></li> 
          </ul>
        </div>
        <div className="header__navbar--connection">
          <a href="/">Login</a>
          <button type="button">Sign Up</button>
        </div>
      </nav>
    </header>
  )
};

export default Header;