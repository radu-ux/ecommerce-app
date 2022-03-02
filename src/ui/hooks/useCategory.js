import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { apolloClient } from "../../application/gql/client"
import { getCategoryByName } from "../../application/gql/queries"

const useCategory = (categoryName) => { 
    const [category, setCategory] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => { 
        const fetchCategory = async () => {
            const response = await apolloClient.query({query: getCategoryByName(categoryName)});
            setCategory(response.data.category);
            setLoading(false);
        };

        setLoading(true);
        fetchCategory();
    }, [categoryName, dispatch]);

    return {category: category, loading: loading};
};

export default useCategory;