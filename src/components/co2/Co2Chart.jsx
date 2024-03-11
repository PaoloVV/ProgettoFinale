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
import { Line } from "react-chartjs-2"
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
    
    return(
      <Line options={options} data={data} />
    )
}

export default Co2Chart;

