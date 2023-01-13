import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/image/footer-logo.svg'

const Footer = () => {
    return (
        <div id="footer">
            <Container className="footer-container">
                <Row>
                    <Col md={4}>
                        <p className='footer-logo'><Link to='/'><img src={footerLogo} /></Link></p>
                        <p>© 2022 Eshop</p>
                        <p>All Rights Reserved</p>
                    </Col>
                    <Col md={4}>
                        <h4>USEFUL LINKS</h4>
                        <ul>
                            <li><Link to='/'>Returns</Link></li>
                            <li><Link to='/'>Support Policy</Link></li>
                            <li><Link to='/'>Size guide</Link></li>
                            <li><Link to='/'>FAQs</Link></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                    <h4>FOLLOW US</h4>
                    <ul>
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" >Facebook</a></li>
                        <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" >Twitter</a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" >Instagram</a></li>
                        <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" >Youtube</a></li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer