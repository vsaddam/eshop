import React from 'react';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const Quantity = ({quantity, increment, decrement}) => {
    
    return (
        <div className='quantity-btn'>
            <button onClick={ () => decrement()}><FaMinus /></button>
            <div className='product-quantity-value'>{quantity}</div>
            <button onClick={() => increment()}><FaPlus /></button>
        </div>

    )
}

export default Quantity