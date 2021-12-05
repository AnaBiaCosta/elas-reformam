import { useEffect, useState } from 'react'

const useSearchHook = () => {
  const [allServices, setAllServices] = useState('')
  const [allStates, setAllStates] = useState('')
  const [allCities, setAllCities] = useState([])

  const [loading, setLoading] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [service, setService] = useState([])
  const [filteredCities, setFilteredCities] = useState([])

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
    setService([...service, filteredService[0].value])
  }

  const fetchJson = url => {
    return fetch(url)
      .then(res => {
        return res.json()
      })
  }

  const getSearchInformations = () => {
    setLoading(true)

    Promise.all([
      fetchJson('http://localhost:3001/services'),
      fetchJson('http://localhost:3001/states'),
      fetchJson('http://localhost:3001/cities')
    ])
      .then(([services, states, cities]) => {
        setAllServices(services)
        setAllStates(states)
        setAllCities(cities)
        setLoading(false)
      })
  }

  useEffect(() => {
    getSearchInformations()
  }, [])

  console.log(city)

  return {
    loading,
    states: allStates,
    services: allServices,
    state,
    cities: filteredCities,
    chooseState,
    chooseCity,
    chooseServices
  }
}

export { useSearchHook }
