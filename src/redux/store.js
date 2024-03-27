import { configureStore } from "@reduxjs/toolkit";
import { datiGraficoReducer } from "./datiGraficoSlice";

export const store = configureStore({
  reducer: {
    datiGrafico: datiGraficoReducer,
  },
});
