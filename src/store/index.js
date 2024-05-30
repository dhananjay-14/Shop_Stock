import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import searchSlice from "./searchSlice";

const shopStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
        search: searchSlice.reducer
    }
})

export default shopStore;