import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './Components/LocationCard'
import ResidentsCard from './Components/ResidentsCard'

function App() {
  const [info, setinfo] = useState()
  let RandomNumber = getRandomNumber()
  const [desiredLocation, setDesiredLocation] = useState()
  

  useEffect (() => {
    const url = `https://rickandmortyapi.com/api/location/${RandomNumber}`
    axios.get(url)
      .then(res => setinfo(res.data))
      .catch(err => alert("Sorry it has to be a number between 1 and 126"))
  }, [desiredLocation])

  const handleSubmit = e => {
    e.preventDefault()
    setDesiredLocation(e.target.search.value)
  }

  if (desiredLocation) {
    RandomNumber = desiredLocation
  }

  console.log(info);
  
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
        <input id='search' placeholder='Try a number from 1 to 126' type="text" />
        <button >Find your favorite location</button>
      </form>
      <LocationCard key={name} info= {info}/>
      <div>
        {
          info?.residents.map ( url =>(
            <ResidentsCard 
            key={url}
            url = {url}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
