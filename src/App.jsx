import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Img from './components/Img'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import { getRandomNumber } from './utils/hanleRandom'

const RESIDENTS_PERPAGE = 10

function App() {

  const [location, setLocation] = useState()
  const [nameLocation, setNameLocation] = useState('')
  const [page, setPage] = useState(1)

  const hanleSubmit = (e) => {
     e.preventDefault()
     setNameLocation(e.target.name.value) 
  }

  const pagination = () => {
    if(!location) return []
    const maxLimit = page * RESIDENTS_PERPAGE;
    const minLimit = maxLimit - RESIDENTS_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents
  }

  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios 
    .get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) =>console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <Img/>
      <LocationInfo location={location}/>
      <ResidentForm hanleSubmit={hanleSubmit}/>
      <ResidentList pagination={pagination}/>
      <Pagination hanleSubmit={hanleSubmit} location={location} RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} setPage={setPage} Pagination={Pagination}/>
    </div>
  )
}

export default App
