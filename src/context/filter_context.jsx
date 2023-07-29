import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
const initialState = {
  isFiltered: false,
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const selectFilter = () => {
    dispatch({ type: 'FILTER_ON' })
  }

  const unselectFilter = () => {
    dispatch({ type: 'FILTER_OFF' })
  }
  return (
    <FilterContext.Provider value={{ ...state, selectFilter, unselectFilter }}>
      {' '}
      {children}{' '}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
