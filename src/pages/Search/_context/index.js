import React, { createContext, useContext, useReducer } from 'react'
import { node } from 'prop-types'

import { Reducer } from './reducer'

export const SearchContext = createContext()

export const SearchContextProvider = ({ children }) => (
  <SearchContext.Provider value={useReducer(Reducer, Reducer.initialState)}>
    {children}
  </SearchContext.Provider>
)

export const useSearchContextConsumer = () => useContext(SearchContext)

SearchContextProvider.propTypes = {
  children: node.isRequired
}
