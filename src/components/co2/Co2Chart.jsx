import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js"
import { useState } from "react"
import { Line } from "react-chartjs-2"
import { useEffect } from "react"
import axios from "axios"
import { useSelector } from "react-redux"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

export const options = {
    responsive: true,
    layout: {
      padding: 30
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white"
        }
      },
      title: {
        display: true,
        text:"CO2",
        color: "white"
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: "white"
        },
        ticks: {
          color: "white"
        },
        border: {
          color: "white"
        }
      }
    }
  }
  

function Co2Chart(){
    // const [temperature, setTemperature] = useState([])
    // const getData = () =>{
    //     axios.get(`https://global-warming.org/api/co2-api`)
    //     .then(res =>{
    //         console.log(res.data.co2)
    //         setTemperature(res.data.co2)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // }
    // const labels = temperature.map(giorno => `${giorno.day}-${giorno.month}-${giorno.year}`)
    const co2 = useSelector((state) => state.co2)

    const labels = co2.co2Data.map(giorno => `${giorno.day}-${giorno.month}-${giorno.year}`)

    const data = {
        labels,
        datasets: [
          {
            label: "Cycle",
            data: co2.co2Data.map(item => item.cycle),
            backgroundColor: 'red'
          },
          {
            label: "Trend",
            data: co2.co2Data.map(item => item.trend),
            backgroundColor: 'black',
          }
        ]
      }

      // useEffect(() =>{
      //   getData()
      // }, [])
    

    return(
      <Line options={options} data={data} />
    )
}

export default Co2Chart;

