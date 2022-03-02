import { useContext } from "react";
import EmptyCart from "../../../assets/EmptyCart.svg";
import NavigationContext from "../../contexts/NavigationContext";
import CartOverlay from "./CartOverlay";

const CartBtn = () => { 
    // console.log("<CartBtn />");

    const {onMouseOverCart, onMouseOutOfCart} = useContext(NavigationContext);

    return (
        <button onMouseOver={onMouseOverCart}
                onMouseOut={onMouseOutOfCart}
        >
            <img src={EmptyCart} alt="empty-cart"></img>
            <CartOverlay/>
        </button>
    );
}

export default CartBtn;