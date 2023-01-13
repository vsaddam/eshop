import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductList from '../components/shop/ProductList';
import FilterSection from '../components/shop/FilterSection';
import Sort from '../components/shop/Sort';

const Products = () => {

    return (
        <>
            <Header />
            <main className='product-page'>
                <Container>
                    <Row className='product-row-flex'>
                        <Col md={2} className="shop-product-filter">
                            <div className=''>
                                <FilterSection />
                            </div>
                        </Col>
                        <Col md={10}>
                            <Row className='product-sort-count-wrapper border'>
                                <Col md="12" className="shop-product-sort"><Sort /></Col>
                            </Row>
                            <Row className='product-list-wrapper'>
                                <ProductList />
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Products