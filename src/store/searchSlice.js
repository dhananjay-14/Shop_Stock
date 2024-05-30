import { createSlice } from "@reduxjs/toolkit"
import { items } from '../data/items'
const searchSlice = createSlice({
    name: 'search',
    initialState: "",
    reducers: {
        search: (state, action) => {
            console.log(state, action);
            const newState = action.payload;
            console.log(newState);
            return newState;
        },
        clrSearch: (state, action) => {
            const newState = "";
            return newState;
        }
    }
});

export const searchActions = searchSlice.actions;
export default searchSlice;