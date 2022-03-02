import { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavigationContext from "../../contexts/NavigationContext";

const CurrencyOverlayWrapper = styled.div`
    flex-direction: column;
    row-gap: 1em;
    align-items: center;
    padding: 1em;
    background-color: white;
    position: absolute;
    top: 100%;
    right: 20%;
    z-index: 30;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: ${props => props.visibility ? "flex" : "none"};

`

const CurrencyBtnWrapper = styled.button`
    :hover { 
        color: #5ECE7B;
    }
`

const CurrencyOverlay = () => { 
    // console.log("<CurrencyOverlay />");

    const currencyOverlayVisibility = useSelector(state => state.ui.currencyOverlayVisibility)
    const { onCurrencyChangeHandler } = useContext(NavigationContext);
    const currencies = useSelector(state => state.currency.currencies);

    const renderCurrencies = () => { 
        return currencies.map((currency, index) => {
            return (
                <CurrencyBtnWrapper onClick={() => onCurrencyChangeHandler(currency)}
                                    key={`currency-btn-${index}`}
                >
                    {currency}
                </CurrencyBtnWrapper>
            ); 
        });
    }

    return (
        <CurrencyOverlayWrapper visibility={currencyOverlayVisibility}>
            {renderCurrencies()}
        </CurrencyOverlayWrapper>
    );
};

export default CurrencyOverlay;