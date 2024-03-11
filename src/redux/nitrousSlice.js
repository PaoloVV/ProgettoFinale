import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: true,
    nitrousData: [],
    error: ""
}

export const fetchNitrous = createAsyncThunk("nitrous/fetchNitrous", async () =>{
    const res = await axios.get(`https://global-warming.org/api/nitrous-oxide-api`)
    // console.log(res.data.nitrous)
    return res.data.nitrous
})

export const nitrousSlice = createSlice({
    name: "nitrous",
    initialState,
    reducers: {
        nitrousLoading: (state) =>{
            state.loading = true
            state.nitrousData= []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNitrous.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchNitrous.fulfilled, (state, action) =>{
            state.loading = false
            state.nitrousData = action.payload
        })
        builder.addCase(fetchNitrous.rejected, (state, action) =>{
            state.loading = false
            state.nitrousData = []
            state.error = action.error.message
        })
    }
})

export const {nitrousLoading} = nitrousSlice.actions
export const nitrousReducer = nitrousSlice.reducer