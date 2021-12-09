import React from 'react'
import { SearchContextProvider } from './_context'
import { Select, ActionChip, Card } from '../../components'
import { useSearchHook } from './Search.hook'
import { startSearch } from '../../assets/images'
import { SERVICES_TYPES } from '../../constants'
import {
  PageWrapper,
  Title,
  SearchContainer,
  ActionsContainer,
  ResultWrapper,
  InitialState,
  ResultText
} from './Search.style'

const Page = () => {
  const {
    loading,
    states,
    services,
    state,
    cities,
    professionalsList,
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

          <ResultWrapper>
            {professionalsList.length > 0 ? (
              <>
                <ResultText>
                  {professionalsList.length} {professionalsList.length === 1 ? 'professional oferece' : 'profissionais oferecem'} esse serviço na sua região!
                </ResultText>

                {professionalsList.map(item => (
                  <Card
                    key={item.id}
                    id={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    state={item.state}
                    city={item.city}
                    services={SERVICES_TYPES[item.service]}
                    jobs={item.jobs}
                    value={item.value}
                  />
                ))}
              </>
            ) : (
              <InitialState>
                <img src={startSearch} alt="Garota segurando uma lupa" />
                <p>Inicie sua busca!</p>
              </InitialState>
            )}
          </ResultWrapper>
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
