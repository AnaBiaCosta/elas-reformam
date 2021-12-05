import React from 'react'
import { SearchContextProvider } from './_context'
import { Select, ActionChip } from '../../components'
import { startSearch } from '../../assets/images'
import {
  PageWrapper,
  Title,
  SearchContainer,
  ActionsContainer,
  ResultWrapper,
  InitialState
} from './Search.style'

const Page = () => {
  const stateData = [
    {
      id: 1,
      name: 'São Paulo',
      slug: 'sao-paulo'
    },
    {
      id: 2,
      name: 'Rio de Janeiro',
      slug: 'rio-de-janeiro'
    }
  ]

  const cityData = [
    {
      id: 1,
      name: 'São Paulo',
      slug: 'sao-paulo'
    },
    {
      id: 2,
      name: 'Itapecerica da Serra',
      slug: 'itapecerica-da-serra'
    }
  ]

  const servicesTypesData = [
    {
      id: 1,
      name: 'Pintura',
      value: 1
    },
    {
      id: 2,
      name: 'Reparos elétricos',
      value: 2
    },
    {
      id: 3,
      name: 'Reparos hidráulicos',
      value: 3
    },
    {
      id: 4,
      name: 'Montagem de móveis',
      value: 4
    }
  ]

  const onClick = value => {
    console.log(value)
  }

  return (
    <PageWrapper>
      <Title>Encontre a profissional perfeita para você :)</Title>

      <SearchContainer>
        <Select
          label="Seu estado"
          placeholder="Selecione seu estado"
          data={stateData}
          // onChange={handleValue}
        />

        <Select
          label="Sua cidade"
          placeholder="Selecione sua cidade"
          data={cityData}
          // onChange={handleValue}
        />

        <ActionsContainer>
          <p>Quais serviços vocês está procurando?</p>

          {servicesTypesData.map(item => (
            <ActionChip
              label={item.name}
              value={item.value}
              onClick={onClick}
            />
          ))}
        </ActionsContainer>
      </SearchContainer>

      <ResultWrapper>
        <InitialState>
          <img src={startSearch} alt="Garota segurando uma lupa" />
          <p>Inicie sua busca!</p>
        </InitialState>
      </ResultWrapper>
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
