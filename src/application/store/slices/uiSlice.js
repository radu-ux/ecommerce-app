import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    backdropVisibility: "hidden",
    cartOverlayVisibility: "hidden",
    currencyOverlayVisibility: false,
    activeCategory: ''
};

const uiSlice = createSlice({
    name: 'ui',
    initialState, 
    reducers: { 
        setBackdopVisibility(state, action) { 
            const { visibility, overflowValue } = action.payload
            state.backdropVisibility = visibility;
            document.body.style.overflowY = overflowValue;
        }, 

        setCartOverlayVisibility(state, action) { 
            const { visibility } = action.payload;
            state.cartOverlayVisibility = visibility;
        },

        setCurrencyOverlayVisibility(state) {
            state.currencyOverlayVisibility = !state.currencyOverlayVisibility;
        },

        hideCurrencyOverlay(state) {
            state.currencyOverlayVisibility = false;
        },

        setActiveCategory(state, action) { 
            const category  = action.payload;
            state.activeCategory = category;
        }
    }
});

export const { setBackdopVisibility, 
               setCartOverlayVisibility, 
               setCurrencyOverlayVisibility , 
               hideCurrencyOverlay,
               setActiveCategory
            } = uiSlice.actions;
export default uiSlice.reducer;