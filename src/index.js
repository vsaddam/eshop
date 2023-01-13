import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { ProductContext } from './context/ProductContext';
import { FilterContext } from './context/FilterContext';
import { CartContext } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductContext>
        <FilterContext>
            <CartContext>
                <App />
            </CartContext>
        </FilterContext>
    </ProductContext>
);