import CategoryView from "../views/CategoryView";
import { useParams } from "react-router-dom"

import useCategory from "../hooks/useCategory";
import { CategoryContextProvider } from "../contexts/CategoryContext";

const CategoryContainer = () => { 
    console.log("<CategoryContainer />");

    const { categoryName } = useParams();
    const { category, loading } = useCategory(categoryName);

    return (
        loading? 
        <h1>Loading</h1> 
            : 
        <CategoryContextProvider>
            <CategoryView category={category}/>
        </CategoryContextProvider>
    );
};

export default CategoryContainer;