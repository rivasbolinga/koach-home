import NavLinks from "./NavLinks";
import Logo from '../assets/logo.png';
import NavButtons from './NavButtons';
import '../styles/navigation.scss';
import { BsMoon } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavigationBar = () => (
  <nav className="navigation-bar">
    <div className="navigation-header">
      <img className="navigation-logo" src={Logo} alt="koach logo" />
    </div>
    <div className="navigation-links">
      <NavLinks />
    </div>
    <div className='navigation-right-phone'>
      <div className="navigation-dark-mode">
        <button className="dark-mode-button" type="button">
          <BsMoon />
        </button>
      </div>
      <div className="navigation-buttons">
        <NavButtons />
      </div>
      <RxHamburgerMenu />
    </div>
  </nav>
)
export default NavigationBar;
