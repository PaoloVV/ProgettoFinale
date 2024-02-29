import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: true,
    methaneData: [],
    error: ""
}

export const fetchMethane = createAsyncThunk("methane/fetchMethane", async ()=>{
    const response = await axios.get(`https://global-warming.org/api/methane-api`)
    console.log(response.data.methane)
    return response.data.methane
})

export const methaneSlice = createSlice({
    name: "methane",
    initialState,
    reducers: {
        impostaLoading: (state) =>{
            state.loading = true
            state.methaneData = []
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchMethane.pending, (state) =>{
            state.loading = true
        }),
        builder.addCase(fetchMethane.fulfilled, (state, action) =>{
            state.loading = false
            state.methaneData = action.payload
        }),
        builder.addCase(fetchMethane.rejected, (state, action) =>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const {impostaLoading} = methaneSlice.actions
export const methaneReducer = methaneSlice.reducer