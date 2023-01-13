import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import desktop from '../../assets/image/desktop.jpg';
import laptop from '../../assets/image/laptop.jpg';
import mobile from '../../assets/image/mobile.jpg';
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="product-category-outer">
                        <Card.Img variant="top" src={desktop} />
                        <Card.Body>
                            <Card.Title>Desktop</Card.Title>
                            <Card.Text>
                                Starting at $100
                            </Card.Text>
                            <Link to="/products"><BsArrowRightCircle size={30} /></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="product-category-outer">
                        <Card.Img variant="top" src={laptop} />
                        <Card.Body>
                            <Card.Title>Laptop</Card.Title>
                            <Card.Text>
                                Starting at $80
                            </Card.Text>
                            <Link to="/products"><BsArrowRightCircle size={30} /></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }} className="product-category-outer">
                        <Card.Img variant="top" src={mobile} />
                        <Card.Body>
                            <Card.Title>Mobile</Card.Title>
                            <Card.Text>
                                Starting at $40
                            </Card.Text>
                            <Link to="/products"><BsArrowRightCircle size={30} /></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductCategory