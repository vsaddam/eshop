import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PriceFormat from '../helper/PriceFormat';

const GridProduct = ({products = []}) => {

    return (
        <>
            {products.map((item,i) => {
                return (
                    <Col key={i} md={4} className="p-2 single-product-wrapper">
                        <NavLink to={`/single-product/${item.title.toLowerCase().replace(/\-/g, '').replace(/  +/g, ' ').replace(/\s/g, '-')}/${item.id}`} >
                            <Card style={{ width: '18rem' }} className="product-category-outer">
                                <Card.Img variant="top" src={item.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        Starting at {< PriceFormat price ={item.price} />}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </Col>
                )
            })}
        </>
    );
}

export default GridProduct;