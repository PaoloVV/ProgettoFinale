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
  return (
    <>
      {grafico.datiGrafico && <Line data={data[id]} options={options[id]} />}
      {/* {console.log(grafico)} */}
    </>
  );
}

export default ChartComponent;
