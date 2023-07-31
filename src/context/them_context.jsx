import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/theme_reducer'

const initialState = {
  isDarkOn: false,
}

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' })
  }
  const themeClass = isDarkOn ? 'dark' : 'light'

  return (
    <ThemeContext.Provider value={{ ...state, toggleDarkMode, themeClass }}>
      <div className={themeClass}>{children}</div>
    </ThemeContext.Provider>
  )
}

// them_context.jsx
export const useThemeContext = () => {
  const { isDarkOn, toggleDarkMode, themeClass } = useContext(ThemeContext);
  return { isDarkOn, toggleDarkMode, themeClass };
};

