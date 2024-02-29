import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: true,
    arcticData: [],
    error: ""
}

export const fetchArctic = createAsyncThunk("arctic/fetchArctic", async () =>{
    const res = await axios.get(`https://global-warming.org/api/arctic-api`)
    console.log(res.data.arcticData)
    return res.data.arcticData
})

export const arcticSlice = createSlice({
    name: "arctic",
    initialState,
    reducers: {
        arcticLoading: (state) =>{
            state.loading = true
            state.arcticData = []
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchArctic.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchArctic.fulfilled, (state, action) =>{
            state.loading = false
            state.arcticData = action.payload
        })
        builder.addCase(fetchArctic.rejected, (state, action) =>{
            state.loading = false
            state.arcticData = []
            state.error = action.error.message
        })

    }
})

export const {arcticLoading} = arcticSlice.actions
export const arcticReducer = arcticSlice.reducer