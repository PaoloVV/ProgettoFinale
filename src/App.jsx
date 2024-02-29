import './App.css'
import React, { useEffect, useState } from 'react'
import Co2Chart from './components/co2/Co2Chart'
import MethaneChart from './components/methane/MethaneChart'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCo2 } from './redux/co2Slice'
import { fetchMethane } from './redux/methaneSlice'
import { fetchTemperature } from './redux/temperatureSlice'
import TemperatureChart from './components/temperature/TemperatureChart'
import { fetchNitrous } from './redux/nitrousSlice'
import NitrousChart from './components/nitrous/NitrousChart'
import { fetchArctic } from './redux/arcticSlice'
import ArcticChart from './components/arctic/ArcticChart'
import Co2 from './components/co2/Co2'
import Navbar from './components/navbar/Navbar'
import Methane from './components/methane/Methane'



function App() {
  const dispatch = useDispatch()
  const co2 = useSelector((state) => state.co2)
  const temperature = useSelector((state) => state.temperature)
  const nitrous = useSelector((state) => state.nitrous)
  const arctic = useSelector((state) => state.arctic)

  useEffect(() =>{
    dispatch(fetchArctic())
    dispatch(fetchNitrous())
    dispatch(fetchTemperature())
    dispatch(fetchCo2())
    dispatch(fetchMethane())
  }, [])

  return (
    <>
      <Navbar />
      <button >Vedi API</button>
      <h1>Home Home Home</h1>
      {/* <div>
        {co2.loading && <p>Loading...</p>}
        {!co2.loading && co2.co2Data ? <Co2Chart /> : null}
        {!co2.loading && co2.error && <p>Error...</p>}
      </div> */}

      {/* <Co2 /> */}
     
      {/* <div>
        {methane.loading && <p>Loading...</p>}
        {!methane.loading && methane.methaneData ? <MethaneChart /> : null}
        {!methane.loading && methane.error && <p>Error...</p>}
      </div> */}

      {/* <Methane /> */}

      {/* <div>
        {temperature.loading && <p>Loading...</p>}
        {!temperature.loading && temperature.temperatureData ? <TemperatureChart /> : null}
        {!temperature.loading && temperature.error && <p>Error...</p>}
      </div>

      <div>
        {nitrous.loading && <p>Loading...</p>}
        {!nitrous.loading && nitrous.nitrousData ? <NitrousChart /> : null}
        {!nitrous.loading && nitrous.error && <p>Error..</p>}
      </div>

      <div>
        {arctic.loading && <p>Loading...</p>}
        {!arctic.loading && arctic.arcticData ? <ArcticChart /> : null}
        {!arctic.loading && arctic.error && <p>Error..</p>}
      </div> */}
    </>
  )
}

export default App
