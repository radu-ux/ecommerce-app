import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const CartOverlayWrapper = styled.div`
    background-color: white;
    z-index: 30;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 100%;
    right: 20%;
    border: 1px solid red;
    visibility: ${props => props.visibility};
`

const CartOverlay = () => { 
    // console.log("<CartOverlay />");

    const cartOverlayVisibility = useSelector(state => state.ui.cartOverlayVisibility);

    return (
        <React.Fragment>
            <CartOverlayWrapper visibility={cartOverlayVisibility}>
                <p>Cart Overlay</p>
            </CartOverlayWrapper>
            <Backdrop/>
        </React.Fragment>
    );
};

export default CartOverlay