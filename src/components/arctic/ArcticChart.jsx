import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    // BarElement,
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
    // BarElement,
    Title,
    Tooltip,
    Legend
  )

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: true,
            text: "Polar Ice"
        }
    },
    scales: {
        x: {
            grid: {
                color: "black"
            },
            ticks: {
                color: "black"
            }
        },
        y: {
            grid: {
                color:"black"
            },
            ticks: {
                color: "black"
            }
        }
    }
}

function ArcticChart(){
    const arctic = useSelector((state) => state.arctic)
    const labels = arctic.arcticData.map(item => item.year)
    const data = {
        labels,
        datasets: [
            {
                label: "Extent",
                data: arctic.arcticData.map(item => item.extent),
                backgroundColor: 'transparent',
                borderColor: "blue",
                pointBorderColor: "transparent"
            },
            {
                label: "Area",
                data: arctic.arcticData.map(item => item.area),
                backgroundColor: 'transparent',
                borderColor: "purple",
                pointBorderColor: "transparent"
            }
        ]
    }

    return(
        <Line data={data} options={options}/>
    )
}

export default ArcticChart