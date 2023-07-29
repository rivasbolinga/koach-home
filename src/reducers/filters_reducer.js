const filters_reducer = (state, action) => {
  if (action.type === 'FILTER_ON') {
    const { payload } = action;
    const updatedFilters = state.filters.map((filter, index) => {
      return {
        ...filter,
        isFiltered: index === payload ? !filter.isFiltered : filter.isFiltered,
      };
    });
    return { ...state, filters: updatedFilters };
  } else {
    throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filters_reducer;