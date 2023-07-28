import { useNavContext } from "../context/nav_context"


const Sidebar = () => {
const { isSidebarOpen, closeSidebar } = useNavContext()
return (
  <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
    sidebar
  </aside>
)
}

export default Sidebar;