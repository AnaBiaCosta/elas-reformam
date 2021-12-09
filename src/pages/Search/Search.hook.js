import { useEffect, useState } from 'react'
import { useSearchContextConsumer } from './_context'
import {
  getProfessionalsListAction, successAction
} from './_context/actions'

const useSearchHook = () => {
  const [allServices, setAllServices] = useState('')
  const [allStates, setAllStates] = useState('')
  const [allCities, setAllCities] = useState([])

  const [loading, setLoading] = useState(true)
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [service, setService] = useState(0)
  const [filteredCities, setFilteredCities] = useState([])
  const [professionalsList, setProfessionalsList] = useState([])

  const [{ data, status }, dispatch] = useSearchContextConsumer()

  useEffect(() => {
    setFilteredCities(allCities?.filter(item => item.stateId === state.id))
  }, [state])

  const chooseState = stateName => {
    setState(allStates?.filter(item => item.slug === stateName.target.value)[0])
  }

  const chooseCity = cityName => {
    setCity(allCities?.filter(item => item.slug === cityName.target.value)[0])
  }

  const chooseServices = serviceType => {
    const filteredService = allServices.filter(item => item.value === serviceType)
    setService(filteredService[0].value)
  }


  useEffect(() => {
    const professional = data.filter(item => item.state === state.name && item.city === city.name && item.service === service)

    setProfessionalsList(professional)

  }, [state, city, service])

  useEffect(() => {
    getSearchInformations()
  }, [])

  const fetchJson = url => {
    return fetch(url)
      .then(res => {
        return res.json()
      })
  }

  const getSearchInformations = () => {
    dispatch(getProfessionalsListAction())
    setLoading(true)

    Promise.all([
      fetchJson('http://localhost:3001/services'),
      fetchJson('http://localhost:3001/states'),
      fetchJson('http://localhost:3001/cities'),
      fetchJson('http://localhost:3001/professionals')
    ])
      .then(([services, states, cities, professionals]) => {
        setAllServices(services)
        setAllStates(states)
        setAllCities(cities)
        setLoading(false)
        dispatch(successAction(professionals))
      })
  }


  return {
    status,
    loading,
    states: allStates,
    services: allServices,
    state,
    cities: filteredCities,
    professionalsList,
    chooseState,
    chooseCity,
    chooseServices,
    emptyList: data.length === 0
  }
}

export { useSearchHook }
