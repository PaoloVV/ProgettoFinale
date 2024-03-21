import React from "react";
import { Line } from "react-chartjs-2";
import useApiData from "../../hook/useApiData";

function Chart({ data }) {
  const { methaneData, loading, error } = useApiData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
}
