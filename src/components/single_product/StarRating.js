import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ rating, review }) => {
    const Star = Array.from({ length: 5 }, (item, i) => {
        let number = i + 0.5;

        return (
            <span key={i}>
                {  
                    rating >= i + 1 ?
                    <FaStar /> :
                    rating >= number ?
                        <FaStarHalfAlt /> :
                        <AiOutlineStar />
                }
            </span>

        )

    })
    return (
        <div className='rating-outer'>
            {Star}
            <b className='product-review'>{review} Reviews</b>
        </div>
    )
}

export default StarRating