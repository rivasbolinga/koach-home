const theme_reducer = (state, action) => {
  if (action.type === 'TOGGLE_DARK_MODE') {
    return { ...state, isDarkOn: true }
  }
}

export default theme_reducer;
