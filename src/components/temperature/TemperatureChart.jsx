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
            position: "top"
        },
        title:{
            display: true,
            text: "TEMPERATURE"
        }
    }
}

function TemperatureChart(){
    const temperature = useSelector((state) => state.temperature)
    const labels = temperature.temperatureData.map(item => item.time)
    const data = {
        labels,
        datasets: [
            {
                label: "station",
                data: temperature.temperatureData.map(item => item.station),
                backgroundColor: 'rgba(255, 255, 0, 0.5',
            },
            {
                label: "land",
                data: temperature.temperatureData.map(item => item.land),
                backgroundColor: 'transparent',
                borderColor: "red",
                pointBorderColor: "transparent"
            }
        ]
    }

    return(
        <Line data={data} options={options}/>
    )
}

export default TemperatureChart