import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { aggiornaGrafico } from "../redux/datiGraficoSlice";
import useWindowSize from "./useWindowSize";

function useApiData(apiUrl) {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const windowSize = useWindowSize();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        // console.log(
        //   response.data.co2 ||
        //     response.data.methane ||
        //     response.data.nitrous ||
        //     response.data.result ||
        //     response.data.arcticData.data
        // );
        setApiData(
          response.data.co2 ||
            response.data.methane ||
            response.data.nitrous ||
            response.data.result ||
            response.data.arcticData.data
        );
        dispatch(
          aggiornaGrafico(
            response.data.co2 ||
              response.data.methane ||
              response.data.nitrous ||
              response.data.result ||
              response.data.arcticData.data
          )
        );
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, [windowSize, apiUrl]);

  return { apiData, loading, error };
}

export default useApiData;
