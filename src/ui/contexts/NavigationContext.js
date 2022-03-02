import React from "react";
import { useDispatch } from "react-redux";

import { setBackdopVisibility, setCartOverlayVisibility, setCurrencyOverlayVisibility, hideCurrencyOverlay } from "../../application/store/slices/uiSlice";
import { setActiveCurrency } from "../../application/store/slices/currencySlice";

const NavigationContext = React.createContext({
    onMouseOverCart: () => {}, 
    onMouseOutOfCart: () => {},
    onCurrencyCLickHandler: () => {},
    onCurrencyChangeHandler: () => {},
    onClickOutsideCurrencyOverlay: () => {}
})

export const NavigationContextProvider = ({children}) => { 
    // console.log("<NavigationContextProvider />");
    
    const dispatch = useDispatch();

    const onMouseOverCart = () => { 
        dispatch(setBackdopVisibility({visibility: "visible", overflowValue: "hidden"}));
        dispatch(setCartOverlayVisibility({visibility: "visible"}));
        dispatch(hideCurrencyOverlay());
    };

    const onMouseOutOfCart = () => { 
        dispatch(setBackdopVisibility({visibility: "hidden", overflowValue: "overlay"}));
        dispatch(setCartOverlayVisibility({visibility: "hidden"}));
    };
    
    const onCurrencyClickHandler = () => {
        dispatch(setCurrencyOverlayVisibility());
    }

    const onCurrencyChangeHandler = currency => { 
        dispatch(setActiveCurrency(currency));
        dispatch(hideCurrencyOverlay());
    }

    const onClickOutsideCurrencyOverlay = (event, currencyOverlayRef) => { 
        if(!currencyOverlayRef.current.contains(event.target)) {
            dispatch(hideCurrencyOverlay());
        }
    };  
    
    const contextValue = { 
        onMouseOverCart: onMouseOverCart,
        onMouseOutOfCart: onMouseOutOfCart,
        onCurrencyClickHandler: onCurrencyClickHandler,
        onCurrencyChangeHandler: onCurrencyChangeHandler,
        onClickOutsideCurrencyOverlay: onClickOutsideCurrencyOverlay
    }

    return (
        <NavigationContext.Provider value={contextValue}>
            {children}
        </NavigationContext.Provider>
    );
}

export default NavigationContext;
