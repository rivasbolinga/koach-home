import { useNavContext } from "../context/nav_context"
import logo from '../assets/logo.png';
import { GrClose } from 'react-icons/gr';
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import '../styles/navigation.scss';

const Sidebar = () => {
const { isSidebarOpen, closeSidebar } = useNavContext()
return (
  <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className="sidebar-header">
      <img src={logo} className="logo" alt="comfy sloth" />
      <button className="close-btn" type="button" onClick={closeSidebar}>
        <GrClose />
      </button>
    </div>
   <NavLinks />
    <NavButtons />
  </aside>
)
}

export default Sidebar;