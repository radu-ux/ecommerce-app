import { useContext } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Cart from "../../../assets/Cart.svg";
import CategoryContext from "../../contexts/CategoryContext";

const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    row-gap: 1.5em;
    padding: 1em;
    transition: box-shadow 150ms ease;
    position: relative;

    img { 
        height: 300px;
        object-fit: cover;
        object-position: top;
    }

    :hover { 
        box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.12);  
        transition: box-shadow 300ms ease; 
    }
`;

const ProductHeading = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
`

const AddToCartBtn = styled.button`
    justify-content: center;
    align-items: center;
    background-color: #5ECE7B;
    width: 52px;
    height: 52px;
    border-radius: 9999px;
    outline: none;
    border: none;
    display: flex;
    transition: all 150ms ease;
    position: absolute;
    top: 70%;
    left: 70%;

    :hover { 
        transform: scale(120%);
        box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.12); 
        transition: all 300ms ease; 
    }

    img { 
        width: 30px;
        height: 30px;
    }
`

const OutOfStockOveraly = styled.div`
    position: absolute;
    z-index: 10;
    color: black;
    top: 0;
    left: 0;
    background-color: rgba(248,248,248, 0.55);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 2em;
`

const Product = ({product}) => { 
    const { id, name, inStock, gallery, prices } = product;
    const { onProductClicHandler } = useContext(CategoryContext);
    const activeCurrency = useSelector(state => state.currency.activeCurrency);

    return (
        <ProductWrapper onClick={() => onProductClicHandler(id)}>
            <img src={gallery[0]} alt={`${name}-${id}`} />
            <ProductHeading>
                <h2>{name}</h2>
                <h3>{activeCurrency + " " + prices[0].amount}</h3>
            </ProductHeading>
            <AddToCartBtn>
                <img src={Cart} alt="add-to-cart"/>
            </AddToCartBtn>
            {!inStock && <OutOfStockOveraly >OUT OF STOCK</OutOfStockOveraly>}
        </ProductWrapper>
    );
};

export default Product 