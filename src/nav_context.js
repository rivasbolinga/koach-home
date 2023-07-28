
export const NavProvider = ({children}) => {
const openSidebar = () => {
  dispatch({ type: SIDEBAR_OPEN })
}

const closeSidebar = () => {
  dispatch({ type: SIDEBAR_CLOSE })
}

}