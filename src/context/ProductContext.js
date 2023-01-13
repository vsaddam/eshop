import { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import axios from 'axios';
import ProductReducer from '../reducer/ProductReducer';

const AppProvider = createContext();
const ProductApi = 'https://6338473d937ea77bfdbd6cf2.mockapi.io/products';
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: false,
    singleProduct: [{}],
};
const ProductContext = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    // all products and store in state
    const getProducts = async (url) => {
        dispatch({ type: "SET_PRODUCTS_LOADING" });
        try {
            const response = await axios.get(url);
            const products = await response.data;
            dispatch({ type: "SET_PRODUCT", payload: products });
        } catch (error) {
            dispatch({ type: "SET_PRODUCTS_ERROR"});
        }
    }

    // get single product and store in state.
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const response = await axios.get(url);
            const singleProduct = await response.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" });
        }
    }

    useEffect(() => {
        getProducts(ProductApi);
    }, []);
    return (
        <AppProvider.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppProvider.Provider>
    );
}

const useProductData = () => {
    return useContext(AppProvider);
}

export { ProductContext, useProductData }