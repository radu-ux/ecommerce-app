import styled from "styled-components";

import BrandIcon from "../../assets/BrandIcon.svg";
import CartBtn from "../components/shared/CartBtn";
import CurrencyBtn from "../components/shared/CurrencyBtn";
import MainNavigation from "../components/shared/MainNavigation";


const HeaderWrapper = styled.header`
    display: flex;
    z-index: 40;
    position: relative;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 5rem 0;
    padding: 1rem 5rem 0 5rem;
`

const HeaderActionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1.5em;
    
    button { 
        background: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        font-size: 1.2em;
        display: flex;
        column-gap: 0.2em;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`

const NavigationView = () => { 
    // console.log("<NavigationView />");

    return (
        <HeaderWrapper>
            <MainNavigation />
            <div>
                <img src={BrandIcon} alt="ecommerce-shop"></img>
            </div>
            <HeaderActionsWrapper>
                <CurrencyBtn />
                <CartBtn />
            </HeaderActionsWrapper>
        </HeaderWrapper>
    );
}

export default NavigationView;