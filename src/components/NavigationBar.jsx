import NavLinks from "./NavLinks";
import Logo from '../assets/logo.png';
import NavButtons from './NavButtons';
import '../styles/navigation.scss';
import { BsMoon } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavContext } from "../context/nav_context";

const NavigationBar = () => {
  const { openSidebar } = useNavContext();
  return (
  <nav className="navigation-bar">
    <div className="navigation-header">
      <img className="navigation-logo" src={Logo} alt="koach logo" />
      <div className="navigation-links">
        <NavLinks />
      </div>
    </div>

    <div className="navigation-right-side">
      <div className="navigation-dark-mode">
        <button className="dark-mode-button" type="button">
          <BsMoon />
        </button>
      </div>
      <div className="navigation-buttons">
        <NavButtons />
      </div>
      <RxHamburgerMenu 
      className="hamburger-icon"
      onClick={openSidebar}
       />
    </div>
  </nav>
)
}
export default NavigationBar;
