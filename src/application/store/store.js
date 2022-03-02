import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";
import currencyReduccer from "./slices/currencySlice";

const store = configureStore({
    reducer: { 
        ui: uiReducer,
        currency: currencyReduccer
    }
});

export default store;