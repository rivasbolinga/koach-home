const nav_reducer = (state, action) => {
  if(action.type === 'SIDEBAR_OPEN') {
    return { ...state, isSidebarOpen: true }
  } if (action.type === 'SIDEBAR_CLOSE') {
    return { ...state, isSidebarOpen: true }
  }
  else {
    throw new Error(`No Matching "${action.type}" - action type`)
  }
} 