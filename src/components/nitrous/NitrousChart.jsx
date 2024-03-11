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
    plugins: {
        legend:{
            position: "top",
            labels: {
                color: "white"
            }
        },
        title: {
            display: true,
            text: "NO2",
            color: "white"
        }
    },
    scales: {
        x: {
            grid: {
                color: "white"
            },
            ticks: {
                color:"white"
            },
            border: {
                color: "white"
            }
        },
        y: {
            grid: {
                color: "white"
            },
            ticks: {
                color:"white"
            },
            border: {
                color: "white"
            }
        }
    }
}

function NitrousChart(){
    const nitrous = useSelector((state) => state.nitrous)
    const labels = nitrous.nitrousData.map(item => item.date)
    const data = {
        labels,
        datasets: [
            {
                label: "Average",
                data: nitrous.nitrousData.map(item => item.average),
                backgroundColor: 'transparent',
                borderColor: "orange",
                pointBorderColor: "transparent"
            },
            {
                label: "Trend",
                data: nitrous.nitrousData.map(item => item.trend),
                backgroundColor: 'blue'
            }
        ]
    }

    return (
        <Line options={options} data={data}/>
    )
}

export default NitrousChart