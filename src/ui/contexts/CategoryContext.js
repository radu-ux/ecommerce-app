import React from "react";
import { useNavigate } from "react-router";

const CategoryContext = React.createContext({
    onProductClicHandler: () => {}
});

export const CategoryContextProvider = ({children}) => { 
    console.log("<CategoryContextProvider />");

    const navigate = useNavigate();
    
    const onProductClicHandler = productId => { 
        navigate(`/product/${productId}`);
    };

    const contextValie = {
        onProductClicHandler: onProductClicHandler
    };

    return (
        <CategoryContext.Provider value={contextValie}>
            {children}
        </CategoryContext.Provider>
    );
}

export default CategoryContext;