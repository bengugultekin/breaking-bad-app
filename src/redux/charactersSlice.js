import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCaracters = createAsyncThunk('characters/getCharacters', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character`);
    return res.data;
})

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        items: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: {
        [fetchCaracters.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchCaracters.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        },
        [fetchCaracters.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    },
});

export default charactersSlice.reducer;