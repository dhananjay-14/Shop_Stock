import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,
        currentlyFetching: false
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true; // PENDING and DONE
            const newState = state;
            return state;
        },
        markFetchingStarted: (state) => {
            state.currentlyFetching = true;
            const newState = state;
            return newState;
        },
        markFetchingFinished: (state) => {
            state.currentlyFetching = false;
            const newState = state;
            return newState;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;