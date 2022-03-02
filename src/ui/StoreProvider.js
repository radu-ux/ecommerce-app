import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCurrencies } from "../application/store/slices/currencySlice";

const StoreProvider = ({children}) => { 
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(fetchCurrencies())
    }, [dispatch])

    return children;
}

export default StoreProvider;