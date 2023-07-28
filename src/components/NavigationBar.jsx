import NavLinks from "./NavLinks";
import Logo from '../assets/logo.png';
import NavButtons from './NavButtons';

const NavigationBar = () => (
  <nav className="navigation-bar">
    <div className="navigation-header">
      <img className="navigation-logo" src={Logo} alt='koach logo'/>
    </div>
    <div className="navigation-links">
      <NavLinks />
    </div>
    <div className="navigation-dark-mode">
      <button className="dar-mode-button" type="button"></button>
    </div>
    <div className="navigation-buttons">
      <NavButtons />
    </div>
  </nav>
)
export default NavigationBar;
