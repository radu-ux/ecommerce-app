import { useParams } from "react-router";

import useProduct from "../hooks/useProduct";
import ProductView from "../views/ProductView";

const ProductContianer = () => { 
    const { productId } = useParams();
    const { loading, product } = useProduct(productId);

    return loading? <h1>Loading</h1> : <ProductView product={product}/>
}

export default ProductContianer;