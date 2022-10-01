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

  <img src="./img" alt="" />
  
  return (
    <div className="App">
      <img className='App-main-img' src="./images/r-m-moving.gif" alt="" />
      <div className='everything-but-the-main-img'>
        <header className='header'>
          <form className='search-and-button' onSubmit={handleSubmit}>
            <input className='search' id='search' placeholder='Try a number from 1 to 126' type="text" />
            <button className='location-finder-button'>Find your favorite location</button>
          </form>
        </header>
        <div className='location-card'>
          <LocationCard key={name} info= {info}/>
        </div>
        
        <div className='residents-card-wrapper'>
          {
            info?.residents.map ( url =>(
              <ResidentsCard 
              key={url}
              url = {url}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
