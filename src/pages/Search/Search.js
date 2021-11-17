import React from 'react'
import { SearchContextProvider } from './_context'
import {
  PageWrapper,
  Title
} from './Search.style'

const Page = () => {
  return (
    <PageWrapper>
      <Title>Encontre a profissional perfeita para você :)</Title>
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
