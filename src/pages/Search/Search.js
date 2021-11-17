import React from 'react'
import { SearchContextProvider } from './_context'
import {
  PageWrapper
} from './Search.style'

const Page = () => {
  return (
    <PageWrapper>
      <div>Busca!</div>
    </PageWrapper>
  )
}

const Search = () => {
  return (
    <SearchContextProvider>
      <Page />
    </SearchContextProvider>
  )
}

export { Search }
