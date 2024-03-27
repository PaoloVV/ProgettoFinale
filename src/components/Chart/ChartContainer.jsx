import { useParams } from "react-router-dom";
import useApiData from "../../hook/useApiData";
import Navbar from "../navbar/Navbar";
import ChartComponent from "./ChartComponent";
import { useSelector } from "react-redux";
import "./Chart.css";
import useWindowSize from "../../hook/useWindowSize";
import ChartData from "../../data/ChartsData";
import DescriptionData from "../../data/DescriptionData";
import { PropagateLoader } from "react-spinners";
import ClassData from "../../data/ClassData";
import Footer from "../footer/footer";
import { Helmet } from "react-helmet";

function ChartContainer() {
  const { id } = useParams();
  const grafico = useSelector((state) => state.datiGrafico);
  const elenco = [
    "co2-api",
    "methane-api",
    "nitrous-oxide-api",
    "temperature-api",
    "arctic-api",
  ];
  const apiUrl = `https://global-warming.org/api/${elenco[id]}`;
  const { apiData, loading, error } = useApiData(apiUrl);
  const { chartData, chartOptions } = ChartData();
  const { descrizioni } = DescriptionData();
  const { classCss } = ClassData();

  return (
    <div
      className={`${classCss[id].classContainer} flex flex-col justify-start`}
    >
      <Navbar></Navbar>

      <div className="lg:hidden advice">
        <p>For better viewing, rotate your device horizontally</p>
      </div>

      <div className={`${classCss[id].classDescription}`}>
        <h3 className="text-xl lg:text-3xl uppercase text-center">
          {descrizioni[id].title}
        </h3>
        <p className="text-sm">{descrizioni[id].description}</p>
      </div>

      <div
        className={`${classCss[id].classChart} p-1 flex flex-col justify-center items-center`}
      >
        {loading && (
          <div>
            <PropagateLoader />
          </div>
        )}
        {!loading && !apiData && error && <div>{error.message}</div>}
        {!loading && apiData ? (
          <>
            <Helmet>
              <title>{descrizioni[id].title} - PlanetCharts</title>
            </Helmet>

            <ChartComponent
              id={id}
              grafico={grafico}
              data={chartData}
              options={chartOptions}
            />
          </>
        ) : null}
      </div>

      <Footer />
    </div>
  );
}

export default ChartContainer;
