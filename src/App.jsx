import './App.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Planet from "./assets/images/planet-sfumato-mini.png"
import Footer from './components/footer/footer'
import { BounceLoader } from 'react-spinners'



function App() {

  // useEffect(() =>{
  //   dispatch(fetchArctic())
  //   dispatch(fetchNitrous())
  //   dispatch(fetchTemperature())
  //   dispatch(fetchCo2())
  //   dispatch(fetchMethane())
  // }, [])

  return (
    <div className='app flex flex-col justify-start'>
      <Navbar />

      <div className='div-home p-2 flex flex-row justify-between'>
        <div className='m-7'>
          <h1 className='text-2xl lg:text-6xl font-bold text-white text-start'>How is the planet?</h1>
          <h3 className='text-2xl font-semibold text-white'></h3>
        </div>
       
        <div className='m-7'>
          {!Planet && <BounceLoader color='white' />}
          {Planet && <div><img src={Planet} alt="sickPlanet" className='planet-img rounded-xl' /></div>}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
