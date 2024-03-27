import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datiGrafico: [],
};

export const datiGraficoSlice = createSlice({
  name: "datiGrafico",
  initialState,
  reducers: {
    aggiornaGrafico(state, action) {
      state.datiGrafico = action.payload;
    },
  },
});

export const { aggiornaGrafico, impostaLoading } = datiGraficoSlice.actions;
export const datiGraficoReducer = datiGraficoSlice.reducer;
