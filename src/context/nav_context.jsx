
import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/nav_reducer';
const initialState = {
  isSidebarOpen: false
}

const NavContext = React.createContext();

export const NavProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
const openSidebar = () => {
  dispatch({ type: 'SIDEBAR_OPEN' })
}

const closeSidebar = () => {
  dispatch({ type: 'SIDEBAR_CLOSE' })
};
return (
  <NavContext.Provider value={{...state, openSidebar, closeSidebar}}
> {children} </NavContext.Provider>
);
};

export const useNavContext = () => {
  return useContext(NavContext)
};