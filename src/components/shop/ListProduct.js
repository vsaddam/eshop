import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PriceFormat from '../helper/PriceFormat';

const ListProduct = ({ products = [] }) => {
    return (
        <>
            {
                products.map((item, i) => {
                   
                    const { thumbnail, title, price, description, id } = item;
                    return (
                        <Col md={12} key={i} className='single-product-list-inner p-2'>
                            <Row className='single-product-list-wrapper border p-2'>
                                <Col md={5} className="product-list-view-img">
                                    <figure>
                                        <img src={thumbnail} alt="image" />
                                    </figure>
                                </Col>
                                <Col md={7} className="product-list-view-details">
                                    <h4>{title}</h4>
                                    <div><PriceFormat price={price} /></div>
                                    <p>{description.slice(0, 100)}</p>
                                    <div className='product-addtocart readmore'>
                                        <NavLink to={`/single-product/${title}/${id}`}>
                                            ReadMore
                                        </NavLink>
                                    </div>

                                </Col>

                            </Row>
                        </Col>
                    )
                })
            }
        </>
    )
}

export default ListProduct