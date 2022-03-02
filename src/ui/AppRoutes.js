import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavigationContainer from "./containers/NavigationContainer";
import Category from "./pages/Category";
import Product from "./pages/Product";

const AppRoutes = () => { 
    return (
        <BrowserRouter>
            <NavigationContainer />
            <Routes>
                <Route path="/category/:categoryName" element={<Category />}/>
                <Route path="/product/:productId" element={<Product />}/>
                <Route path="/" element={<Navigate to="/category/clothes"/>}/>
                <Route path="/*" element={<h1>Page not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;