import { configureStore } from "@reduxjs/toolkit";
import { co2Reducer } from "./co2Slice";
import { methaneReducer } from "./methaneSlice";
import { temperatureReducer } from "./temperatureSlice";
import { nitrousReducer } from "./nitrousSlice";
import { arcticReducer } from "./arcticSlice";

export const store = configureStore({
    reducer: {
        co2: co2Reducer,
        methane: methaneReducer,
        temperature: temperatureReducer,
        nitrous: nitrousReducer,
        arctic: arcticReducer
    }
})