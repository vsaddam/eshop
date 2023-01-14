import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/image/logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useAddToCart } from '../../context/CartContext';

const Header = () => {
    const { total_item } = useAddToCart();
    const [isLogin, setIsLogin] = useState('Login');
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        let user = localStorage.getItem('username');
        if (user !== 'null') {
            setIsLogin(user);
            setAuth(true);
        } else {
            setIsLogin('Login');
            setAuth(false);
        }

    }, [isLogin]);
    return (
        <div id="header">
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Container>
                    <LinkContainer to='/eshop'>
                        <Navbar.Brand><img src={logo} alt="img"/></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="flex-container">
                            <LinkContainer to="/eshop">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/products">
                                <Nav.Link>Products</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to={'/myaccount'} className="d-flex text-capitalize">
                        <MdAccountCircle size={30} className="account_icon" style={{ "marginRight": "10px" }} />
                        {isLogin}
                    </Link>
                    {auth !== false ? (<> <span>&nbsp; | </span><Link to={'/login'} className="d-flex text-capitalize" style={{ "marginLeft": "10px" }}> Logout </Link></>) : ""}

                    <Link to={'/cart'} className="header-cart-icon-wrapper">
                        <FiShoppingCart size={30} className="cart_icon" style={{ marginLeft: '15px' }} />
                        <span className='cart-total--items'>{total_item}</span>
                    </Link>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header