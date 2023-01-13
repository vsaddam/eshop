import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import PageNotFound from './pages/PageNotFound';
import MyAccount from './pages/MyAccount';
import MyAccountPage from './components/securePage/MyAccountPage';
import Signup from './components/forms/Signup';
import LoginForm from "./components/forms/LoginForm";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";


function App() {

    return (
        <div className="layout">
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/products" exact element={<Products />} />
                    <Route path="/single-product/:name/:id" exact element={<SingleProduct />} />
                    <Route path="/myaccount" element={<MyAccountPage> <MyAccount /> </MyAccountPage>} />
                    <Route path="/cart" exact element={<Cart />} />
                    <Route path="/signup" exact element={<Signup />} />
                    <Route path="/login" exact element={<LoginForm />} />
                    <Route path="/*" exact element={<PageNotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
