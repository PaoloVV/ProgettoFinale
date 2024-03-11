import './App.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Planet from "./assets/images/planet-sfumato-mini.png"
import Footer from './components/footer/footer'
import { BounceLoader } from 'react-spinners'



function App() {

  return (
    <div className='app flex flex-col justify-start'>
      <Navbar />

      <div className='div-home p-2 flex flex-row justify-between'>
        <div className='m-7'>
          <h1 className='text-2xl lg:text-6xl font-bold text-white text-start uppercase'>planet charts</h1>
          <h3 className='text-2xl mt-3 font-semibold text-white'>How is the planet?</h3>
          <h3 className='text-2xl mt-3 font-semibold text-white'>Is he well or is he getting worse and worse?</h3>
          <p className='mb-3 mt-3 text-white'>How many times do we stop to think about how our planet is really doing?</p>
          <p className='mb-3 text-white'>The health of our planet coincides with the health of all of us.</p>
          <p className='mb-3 text-white'>In this App you can view graphs that show data on the increases in the main greenhouse gases, the level of polar ice and the increase in global temperature in recent years.</p>
          <p className='mb-3 text-white'>The data comes from the global warming website</p>
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
