import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartComponent({ id, grafico, data, options }) {
  // const grafico = useSelector((state) => state.datiGrafico);
  // const chartData = [
  //   {
  //     id: 0,
  //     labels: grafico.datiGrafico.map(
  //       (item) => `${item.day}-${item.month}-${item.year}`
  //     ),
  //     datasets: [
  //       {
  //         label: "Cycle",
  //         data: grafico.datiGrafico.map((item) => item.cycle),
  //         backgroundColor: "red",
  //       },
  //       {
  //         label: "Trend",
  //         data: grafico.datiGrafico.map((item) => item.trend),
  //         backgroundColor: "black",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     labels: grafico.datiGrafico.map((item) => item.date),
  //     datasets: [
  //       {
  //         label: "average",
  //         data: grafico.datiGrafico.map((item) => item.average),
  //         backgroundColor: "transparent",
  //         borderColor: "red",
  //         pointBorderColor: "transparent",
  //       },
  //       {
  //         label: "trend",
  //         data: grafico.datiGrafico.map((item) => item.trend),
  //         backgroundColor: "blue",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     labels: grafico.datiGrafico.map((item) => item.date),
  //     datasets: [
  //       {
  //         label: "Average",
  //         data: grafico.datiGrafico.map((item) => item.average),
  //         backgroundColor: "transparent",
  //         borderColor: "orange",
  //         pointBorderColor: "transparent",
  //       },
  //       {
  //         label: "Trend",
  //         data: grafico.datiGrafico.map((item) => item.trend),
  //         backgroundColor: "blue",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     labels: grafico.datiGrafico.map((item) => item.time),
  //     datasets: [
  //       {
  //         label: "station",
  //         data: grafico.datiGrafico.map((item) => item.station),
  //         backgroundColor: "rgba(255, 255, 0, 0.5",
  //       },
  //       {
  //         label: "land",
  //         data: grafico.datiGrafico.map((item) => item.land),
  //         backgroundColor: "transparent",
  //         borderColor: "red",
  //         pointBorderColor: "transparent",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     labels: grafico.datiGrafico.map((item) => item.year),
  //     datasets: [
  //       {
  //         label: "Extent",
  //         data: grafico.datiGrafico.map((item) => item.extent),
  //         backgroundColor: "transparent",
  //         borderColor: "blue",
  //         pointBorderColor: "transparent",
  //       },
  //       {
  //         label: "Area",
  //         data: grafico.datiGrafico.map((item) => item.area),
  //         backgroundColor: "transparent",
  //         borderColor: "purple",
  //         pointBorderColor: "transparent",
  //       },
  //     ],
  //   },
  // ];
  // const chartOptions = [
  //   {
  //     id: 0,
  //     responsive: true,
  //     layout: {
  //       padding: 30,
  //     },
  //     plugins: {
  //       legend: {
  //         position: "top",
  //         labels: {
  //           color: "white",
  //         },
  //       },
  //       title: {
  //         display: true,
  //         text: "CO2",
  //         color: "white",
  //       },
  //     },
  //     scales: {
  //       y: {
  //         grid: {
  //           color: "white",
  //         },
  //         ticks: {
  //           color: "white",
  //         },
  //         border: {
  //           color: "white",
  //         },
  //       },
  //     },
  //   },
  //   {
  //     id: 1,
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: "top",
  //         labels: {
  //           color: "black",
  //         },
  //       },
  //       title: {
  //         display: true,
  //         text: "METHANE",
  //         color: "black",
  //       },
  //     },
  //     scales: {
  //       x: {
  //         grid: {
  //           color: "white",
  //         },
  //         ticks: {
  //           color: "black",
  //         },
  //         border: {
  //           color: "white",
  //         },
  //       },
  //       y: {
  //         grid: {
  //           color: "white",
  //         },
  //         ticks: {
  //           color: "black",
  //         },
  //         border: {
  //           color: "white",
  //         },
  //       },
  //     },
  //   },
  //   {
  //     id: 2,
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: "top",
  //         labels: {
  //           color: "white",
  //         },
  //       },
  //       title: {
  //         display: true,
  //         text: "NO2",
  //         color: "white",
  //       },
  //     },
  //     scales: {
  //       x: {
  //         grid: {
  //           color: "white",
  //         },
  //         ticks: {
  //           color: "white",
  //         },
  //         border: {
  //           color: "white",
  //         },
  //       },
  //       y: {
  //         grid: {
  //           color: "white",
  //         },
  //         ticks: {
  //           color: "white",
  //         },
  //         border: {
  //           color: "white",
  //         },
  //       },
  //     },
  //   },
  //   {
  //     id: 3,
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: "top",
  //       },
  //       title: {
  //         display: true,
  //         text: "TEMPERATURE",
  //       },
  //     },
  //   },
  //   {
  //     id: 4,
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: "top",
  //       },
  //       title: {
  //         display: true,
  //         text: "Polar Ice",
  //       },
  //     },
  //     scales: {
  //       x: {
  //         grid: {
  //           color: "black",
  //         },
  //         ticks: {
  //           color: "black",
  //         },
  //       },
  //       y: {
  //         grid: {
  //           color: "black",
  //         },
  //         ticks: {
  //           color: "black",
  //         },
  //       },
  //     },
  //   },
  // ];

  return (
    <>
      {grafico.datiGrafico && <Line data={data[id]} options={options[id]} />}
      {console.log(grafico)}
    </>
  );
}

export default ChartComponent;
