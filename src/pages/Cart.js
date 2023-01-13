import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useAddToCart } from '../context/CartContext';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CartItem from '../components/cart/CartItem';
import { NavLink } from 'react-router-dom';
import PriceFormat from '../components/helper/PriceFormat';


const Cart = () => {
    const { cart, ClearCart, total_price, shipping_fee } = useAddToCart();

    if (cart.length === 0) {
        return (
            <>
                <Header />
                <main>
                    <Container>
                        <Row>
                            <Col md={12} className="cart-empty-column">
                                <div className='cart-empty-notice text-center mt-4'>
                                    No Cart Items.
                                </div>
                                <div className='cart-empty-buttons'>
                                    <NavLink to='/products' className='cart-empty-wrapper'>
                                        <Button className='cart-empty-shopping-btn'>Return to Shop</Button>
                                    </NavLink>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <main>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Cart</h3>
                            <div className='cart-table--wrapper cart-grid-five-col'>
                                <div className='text-center'>Item</div>
                                <div className='cart-mobile-hide'>Price</div>
                                <div>quantity</div>
                                <div className='cart-mobile-hide'>Subtotal</div>
                                <div className='text-center'>Remove</div>
                            </div>
                            <hr />
                            <div className='cart-items-wrapper'>
                                {
                                    cart.map((curElem) => {
                                        return <CartItem key={curElem.id} {...curElem} />
                                    })
                                }
                            </div>
                            <hr />
                            <div className='cart-action-buttons d-flex'>
                                <NavLink to='/products'>
                                    <Button className='cart-continue-shopping-btn'>Continue Shopping</Button>
                                </NavLink>
                                <Button className='cart-clear-button btn-danger' onClick={ClearCart}>Clear Cart</Button>
                            </div>
                            <div className='cart-order-total-outer'>
                                <div className='cart-order-total-wrapper'>
                                    <div className='cart-subTotal'>
                                        <div className='cart-subtotal--col1'>SubTotal:</div>
                                        <div className='cart-subtotal--col2'><PriceFormat price={total_price} /></div>
                                    </div>
                                    <div className='cart-subTotal'>
                                        <div className='cart-subtotal--col1'>Shipping Fee:</div>
                                        <div className='cart-subtotal--col2'><PriceFormat price={shipping_fee} /></div>
                                    </div>
                                    <div className='cart-subTotal'>
                                        <div className='cart-subtotal--col1'>Order Total:</div>
                                        <div className='cart-subtotal--col2'><PriceFormat price={total_price + shipping_fee} /></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Cart