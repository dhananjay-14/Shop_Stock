import { createSlice } from "@reduxjs/toolkit"
import { items } from '../data/items'
const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        },
    }
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;