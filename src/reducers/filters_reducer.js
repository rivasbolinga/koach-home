const filters_reducer = (state, action) => {
  if (action.type === 'FILTER_ON') {
    return { ...state, isFiltered: true }
  }
  if (action.type === 'FILTER_OFF') {
    return { ...state, isFiltered: false }
  } else {
    throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default filters_reducer;