import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: true,
    temperatureData: [],
    error: ""
}

export const fetchTemperature = createAsyncThunk("temperature/fetchTemperature", async () =>{
    const res = await axios.get(`https://global-warming.org/api/temperature-api`)
    // console.log(res.data.result)
    return res.data.result
})

export const temperatureSlice = createSlice({
    name: "temperature",
    initialState,
    reducers: {
        impostaLoading: (state) =>{
            state.loading = true
            state.temperatureData = []
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchTemperature.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchTemperature.fulfilled, (state, action) =>{
            state.loading = false
            state.temperatureData = action.payload
        })
        builder.addCase(fetchTemperature.rejected, (state, action) =>{
            state.loading = false
            state.temperatureData = []
            state.error = action.error.message
        })
    }
})

export const {impostaLoading} = temperatureSlice.actions
export const temperatureReducer = temperatureSlice.reducer