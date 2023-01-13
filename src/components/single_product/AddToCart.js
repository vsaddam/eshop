import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Quantity from './Quantity';
import { useAddToCart } from '../../context/CartContext';


const ColorVariations = ({ product }) => {
    const { id, color = [], stock } = product;
    const { addToCart } = useAddToCart();
    const [colors, setColors] = useState(color[0]);
    const [quantity, setquantity] = useState(1);

    const decrement = () => {
        return quantity > 1 ? setquantity(quantity - 1) : quantity;
    }

    const increment = () => {
        return quantity < stock ? setquantity(quantity + 1) : stock;
    }

    useEffect(() => {
        setColors(color[0]);
    }, [color]);
    return (
        <>
            <div className='color-variations'>
                <div className='color-title'>Colors:</div>
                <div className='color-list'>
                    {
                        color.map((curColor, index) => {
                            return (
                                <button
                                    key={index}
                                    style={{ backgroundColor: curColor }}
                                    className={colors === curColor ? 'active' : ''}
                                    onClick={() => { setColors(curColor) }}
                                >
                                    {colors === curColor ? <FaCheck /> : null}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className='product-quantity'>
                <Quantity quantity={quantity} decrement={decrement} increment={increment} />
                <div className='product-addtocart'>
                    <NavLink to='/cart' onClick={() => addToCart(id, colors, quantity, product)}> AddToCart </NavLink>
                </div>
            </div>
        </>
    )
}

export default ColorVariations