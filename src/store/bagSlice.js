import { createSlice } from "@reduxjs/toolkit"

const bagSlice = createSlice({
    name: 'bag',
    initialState: ["002"],
    reducers: {
        addToBag: (state, action) => {
            const newState = state;
            newState.push(action.payload);
            return newState;
        },
        removeFromBag: (state, action) => {
            console.log("remove called")
            const newState = state.filter(itemId => itemId != action.payload);
            return newState;
        },
        clearBag: (state) => {
            return []
        }
    }
});

export const bagActions = bagSlice.actions;
export default bagSlice;