import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResidents from './components/CardResidents'
import LocationInfo from './components/LocationInfo'
import getRamdonNumber from './utils/getRandomNumber'
import FilterList from './components/FilterList'
import ErrorScreen from './components/ErrorScreen'

function App() {

  // Guarda una location
  const [location, setlocation] = useState()
  // Guarda informacion del input para hacer la peticion cuando se haga el input
  const [searchInput, setsearchInput] = useState('')
  // Guarda sugerencias de la API
  const [suggestedList, setsuggestedList] = useState()
  // Si hay error
  const [hasError, sethasError] = useState(false)

  useEffect(() => {
    let id = getRamdonNumber()
    if (searchInput) {
      id = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => {
        sethasError(false),
          setlocation(res.data)
      })
      .catch(err => sethasError(true))

  }, [searchInput])

  const handleSubmit = event => {
    event.preventDefault()
    setsearchInput(event.target.idLocate.value)
  }

  const handleChange = event => {
    if (event.target.value === '') {
      setsuggestedList()
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`
      axios.get(URL)
        .then(res => setsuggestedList(res.data.results))
        .catch(err => console.log(err))
    }
  }



  return (
    <div className="App">
      <div className='card__header-app'>
        <h1>Rick and Morty</h1>
        <form onSubmit={handleSubmit}>
          <input id='idLocate' placeholder='Enter a number from 1 to 126' type="text" onChange={handleChange} />
          <button className='card__btn-app'>Search</button>
          <FilterList suggestedList={suggestedList} setsearchInput={setsearchInput} />
        </form>
      </div>
      {
        hasError ?
          <ErrorScreen />
          :
          <>
            <LocationInfo location={location} />
            <div className='card__container-app'>
              {
                location?.residents.map(url => (
                  <CardResidents
                    url={url}
                    key={url} />
                ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default App
