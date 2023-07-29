import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/filters_reducer';
import filtersContent from '../data';


const initialState = {
  filters: filtersContent.filters,
  isFiltered: false,
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleFilter = (id) => {
    dispatch({ type: 'FILTER_ON', payload:id })
  }

  return (
    <FilterContext.Provider value={{ ...state, toggleFilter}}>
      {' '}
      {children}{' '}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
