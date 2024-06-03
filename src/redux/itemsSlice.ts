import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "./client";

export const fetchItems = createAsyncThunk('fetchItems', async () => {
    return new client().get('/fakeapi/items');
});

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [] as any[],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
    reducers: {}
})

export default itemsSlice.reducer;