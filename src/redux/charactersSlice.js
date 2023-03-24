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
    },
    reducers: {},
    extraReducers: {
        [fetchCaracters.fulfilled]: (state, action) => {
            console.log(action.payload);
        },
    },
});

export default charactersSlice.reducer;