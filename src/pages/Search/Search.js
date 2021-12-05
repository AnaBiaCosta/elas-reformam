import React from 'react'
import { SearchContextProvider } from './_context'
import { Select, ActionChip } from '../../components'
// import { startSearch } from '../../assets/images'
import { useSearchHook } from './Search.hook'
import {
  PageWrapper,
  Title,
  SearchContainer,
  ActionsContainer
  // ResultWrapper,
  // InitialState
} from './Search.style'

const Page = () => {
  const {
    loading,
    states,
    services,
    state,
    cities,
    chooseState,
    chooseCity,
    chooseServices
  } = useSearchHook()

  return (
    <>
      {loading === false && (
        <PageWrapper>
          <Title>Encontre a profissional perfeita para você :)</Title>

          <SearchContainer>
            <Select
              label="Seu estado"
              placeholder="Selecione seu estado"
              data={states}
              onChange={chooseState}
            />

            {state && (
              <Select
                label="Sua cidade"
                placeholder="Selecione sua cidade"
                data={cities}
                onChange={chooseCity}
              />
            )}

            <ActionsContainer>
              <p>Quais serviços vocês está procurando?</p>

              {services.map(item => (
                <ActionChip
                  label={item.name}
                  value={item.value}
                  onClick={chooseServices}
                />
              ))}
            </ActionsContainer>

          </SearchContainer>
        </PageWrapper>
      )}
    </>
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
