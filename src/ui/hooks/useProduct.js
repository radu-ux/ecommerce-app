import { useEffect, useState } from "react";

import { apolloClient } from "../../application/gql/client";
import { getProductById } from "../../application/gql/queries";

const useProduct = (productId) => { 
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const fetchProduct = async () => { 
            const response = await apolloClient.query({query: getProductById(productId)});
            console.log(response.data.product);
            setProduct(response.data.product);
            setLoading(false);
        }

        setLoading(true);
        fetchProduct();
    }, [productId]);

    return {loading: loading, product: product};
}

export default useProduct;