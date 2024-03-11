import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: true,
    co2Data: [],
    error: ""
}

export const fetchCo2 = createAsyncThunk("co2/fetchCo2", async () => {
    const response = await axios.get(`https://global-warming.org/api/co2-api`)
    // console.log(response.data.co2)
    return response.data.co2
})

export const co2Slice = createSlice({
    name: "co2",
    initialState,
    reducers: {
        co2Loading: (state) =>{
            state.loading = true
            state.co2Data = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCo2.pending, (state)=>{
            state.loading = true
        }),
        builder.addCase(fetchCo2.fulfilled, (state, action) =>{
            state.loading = false
            state.co2Data = action.payload
        }),
        builder.addCase(fetchCo2.rejected, (state, action) =>{
            state.loading = false
            state.co2Data = []
            state.error = action.error.message
        })
    }
})

export const { co2Loading } = co2Slice.actions
export const co2Reducer = co2Slice.reducer