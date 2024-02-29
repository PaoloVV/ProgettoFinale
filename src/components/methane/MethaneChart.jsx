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

// import { Bar } from "react-chartjs-2"
import { Line } from "react-chartjs-2"
import { useEffect, useState } from "react"
import axios from "axios"
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
    plugins:{
        legend: {
            position: "top",
            labels: {
                color: "black"
            }
        },
        title: {
            display: true,
            text: "METHANE",
            color: "black"
        }
    },
    scales: {
        x: {
           grid: {
            color: "white"
            },
            ticks: {
                color: "black"
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
                color: "black"
            },
            border: {
                color: "white"
            } 
        }
        
    }
}

function MethaneChart(){
    const methane = useSelector((state) => state.methane)
    const labels = methane.methaneData.map(item => item.date)
    const data = {
        labels,
        datasets: [
            {
                label: "average",
                data: methane.methaneData.map(item => item.average),
                backgroundColor: 'transparent',
                borderColor: "red",
                pointBorderColor: "transparent"
            },
            {
                label: "trend",
                data: methane.methaneData.map(item => item.trend),
                backgroundColor: 'blue',
            }
        ]
    }
    return (
        <>
            <Line options={options} data={data} />
        </>
        
    )
}

export default MethaneChart;