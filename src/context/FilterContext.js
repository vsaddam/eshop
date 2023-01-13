import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/FilterReducer';
import { useProductData } from './ProductContext';

export const FilterContextInit = createContext();
const initialState = {
    'filter_products': [],
    'allProducts': [],
    'grid_view': true,
    'sort_value': 'Price Low To High',
    'filters': {
        'text': '',
        'category': 'all',
        'brand': 'all',
        'color': 'all',
        'maxPrice' : 0,
        'minPrice' : 0,
        'price' : 0
    }
}

export const FilterContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products } = useProductData();

    // grid view function
    const SetGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" });
    }

    // list view function
    const SetListView = () => {
        dispatch({ type: "SET_LIST_VIEW" });
    }

    // sort value setting function
    const ProductSort = (event) => {
        let value = event.target.value;
        dispatch({ type: "SET_SORT_VALUE", payload: value });
    }

    // filter value update function
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        dispatch({ type: "FILTER_VALUE_UPDATE", payload: { name, value } });
    }

    // clear filters
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS"});
    }

    // useEffect for products updates
    useEffect(() => {
        dispatch({ type: "LOAD_PRODUCT_DATA", payload: products });
    }, [products]);

    // useEffect for sortable updates
    useEffect(() => {
        dispatch({ type: 'SET_PRODUCT_FILTER' });
        dispatch({ type: "SET_PRODUCT_SORT" });
    }, [products, state.sort_value, state.filters]);

    return (
        <FilterContextInit.Provider value={{ ...state, SetGridView, SetListView, ProductSort, updateFilterValue, clearFilters }}>
            {children}
        </FilterContextInit.Provider>
    )
}

// export all filter object function
export const useFilterContext = () => {
    return useContext(FilterContextInit);
}