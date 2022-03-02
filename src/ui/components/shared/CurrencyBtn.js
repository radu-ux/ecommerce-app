import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import DownArrow from "../../../assets/DownArrow.svg";
import CurrencyOverlay from "./CurrencyOverlay";
import NavigationContext from "../../contexts/NavigationContext";

const ArrowImg = styled.img`
    transform: ${props => props.currencyOverlayVisibility? "rotate(180deg)" : "rotate(0deg)"};
`

const CurrencyBtnWrapper = styled.div`
    position: relative;
`

const CurrencyBtn = () => { 
    // console.log("<CurrencyBtn />");

    const currencyOverlayVisibility = useSelector(state => state.ui.currencyOverlayVisibility);
    const activeCurrency = useSelector(state => state.currency.activeCurrency);
    const { onCurrencyClickHandler, onClickOutsideCurrencyOverlay } = useContext(NavigationContext);
    const currencyOverlayRef = useRef();

    useEffect(() => { 
        document.addEventListener("click", (event) => onClickOutsideCurrencyOverlay(event, currencyOverlayRef));

        return () => { 
            document.removeEventListener("click", (event) => onClickOutsideCurrencyOverlay(event, currencyOverlayRef));
        }
    }, [onClickOutsideCurrencyOverlay])

    return (
        <CurrencyBtnWrapper ref={currencyOverlayRef}>
            <button onClick={onCurrencyClickHandler}>
                <span>{activeCurrency}</span>
                <ArrowImg src={DownArrow} alt="change-currency-arrow" 
                          currencyOverlayVisibility={currencyOverlayVisibility}
                />
            </button>
            <CurrencyOverlay/>
        </CurrencyBtnWrapper>
    );
};

export default CurrencyBtn;