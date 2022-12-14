import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './Components/LocationCard'
import ResidentsCard from './Components/ResidentsCard'
import Filters from './Components/Filters'

function App() {
  /*This is to safe tre information of a location*/ 
  const [info, setinfo] = useState()
  /*This si to get a random location once page has loaded*/ 
  
  /*This is users desider location after submitting*/ 
  const [desiredLocation, setDesiredLocation] = useState()
  /*These are the sugestions that happen when the user types something*/ 
  const [sugList, setSugList] = useState()
  

/*This is to control the submit*/   
const handleSubmit = e => {
  e.preventDefault()
  setDesiredLocation(e.target.search.value)
}

/*This si to get an specific location*/   
  useEffect (() => {
    let RandomNumber = getRandomNumber()
    if (desiredLocation) {
      RandomNumber = desiredLocation
    }

    const url = `https://rickandmortyapi.com/api/location/${RandomNumber}`
    axios.get(url)
      .then(res => setinfo(res.data))
      .catch(err => alert("Sorry, it has to be a number between 1 and 126.!"))
  }, [desiredLocation])




  

 /*This is for something to happen when the user types something*/  
  const handleChange = e => {
    let url = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

    if (e.target.value === "") {
      setSugList()
    } else {
      axios.get(url)
         .then(res => setSugList(res.data.results))
         .catch(err => console.log(err))
    }
  }

  
  /*Return begins here*/ 
  return (
    <div className="App">
      <img className='App-main-img' src="./images/r-m-moving.gif" alt="" />
      <div className='everything-but-the-main-img'>
        <header className='header'>
          <form className='search-and-button' onSubmit={handleSubmit}>
            <input className='search' id='search' placeholder='Try a number from 1 to 126' type="text" onChange={handleChange}/>
            <button className='location-finder-button'><span>Find your favorite location</span></button>
          </form>
            <Filters sugList = {sugList} setDesiredLocation = {setDesiredLocation}/>
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
