import React from 'react';
import PriceFormat from '../helper/PriceFormat';
import Quantity from '../single_product/Quantity';
import { FaTrash } from 'react-icons/fa';
import { useAddToCart } from '../../context/CartContext';

const CartItem = ({ id, name, color, quantity, image, price, max }) => {
    const { RemoveItem, increment, decrement } = useAddToCart();

    return (
        <div className='cart-table--wrapper cart-grid-five-col'>
            {/* image column */}
            <div className='cart-image-column d-flex'>
                <div className='cart-product-image me-3'>
                    <figure>
                        <img src={image} alt={id} width="40" />
                    </figure>
                </div>
                <div className='cart-product-name--color'>
                    <p>{name}</p>
                    <div className='cart-product-color-wrapper d-flex'>
                        <span className='color-text'>Color:</span><span style={{ display: 'inline-block', backgroundColor: color, width: '15px', height: "15px", borderRadius: "50%" }}>&nbsp;</span>
                    </div>
                </div>
            </div>

            {/* price column */}
            <div className='cart-product--price'>
                <PriceFormat price={price} />
            </div>

            {/* quantity column */}
            <div className='cart-product-quantity'>
                <Quantity quantity={quantity} decrement={() => decrement(id)} increment={() => increment(id)} />
            </div>

            {/* subtotal column */}
            <div className='cart-product-subtotal'>
                <PriceFormat price={price * quantity} />
            </div>

            {/* product remove column */}
            <div className='cart-product-remove text-center'>
                <FaTrash style={{ color: 'red' }} onClick={() => RemoveItem(id)} />
            </div>
        </div>
    )
}

export default CartItem