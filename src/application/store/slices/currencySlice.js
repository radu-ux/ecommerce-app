import { createSlice } from "@reduxjs/toolkit";

import { apolloClient } from "../../gql/client";
import { getCurrencies } from "../../gql/queries";

const initialState = { 
    currencies: [],
    activeCurrency: '',
    loading: false,
    error: ''
};

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setActiveCurrency(state, action) { 
            const currency = action.payload;
            state.activeCurrency = currency;
        },

        startLoading(state) { 
            state.loading = true;
        },

        fetchSuccess(state, action) { 
            const currencies  = action.payload;
            state.loading = false;
            state.currencies = currencies;
            state.activeCurrency = currencies[0];
        },

        fetchFailed(state, action) { 
            const error = action.payload;
            state.error = error;
            state.loading = false;
        } 
    }
});

export const fetchCurrencies = () => { 
    const { startLoading, fetchSuccess, fetchFailed } = currencySlice.actions;
    return async dispatch => { 
        dispatch(startLoading());
        try { 
            const response = await apolloClient.query({query: getCurrencies()});
            dispatch(fetchSuccess(response.data.currencies));
        } catch (error) {
            dispatch(fetchFailed(error))
        }
    }
}

export const { setActiveCurrency } = currencySlice.actions;
export default currencySlice.reducer;