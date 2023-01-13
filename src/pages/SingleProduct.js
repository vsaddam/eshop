import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductData } from '../context/ProductContext';
import Breadcrumb from '../components/single_product/Breadcrumb';
import { Col, Container, Row } from 'react-bootstrap';
import PriceFormat from '../components/helper/PriceFormat';
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import Gallery from '../components/single_product/Gallery';
import StarRating from '../components/single_product/StarRating';
import AddToCart from '../components/single_product/AddToCart';


const SingleProduct = () => {
   const { getSingleProduct, isSingleLoading, singleProduct } = useProductData();
  
   const [singleRawData] = singleProduct;

   const {
      id: alias,
      title,
      description,
      price,
      brand,
      category,
      discountPercentage,
      images,
      rating,
      review,
      stock,
      thumbnail,
      color
   } = singleRawData
   const API = 'https://6338473d937ea77bfdbd6cf2.mockapi.io/products'
   const { name, id } = useParams();

   useEffect(() => {
      getSingleProduct(`${API}?id=${id}`);
   }, []);
   return (
      <>
         <Header />
         <main className='common-main-wrapper'>
            <Breadcrumb title={title} />
            <Container className='single-product-container'>
               <Row className='single-product-row mt-5'>
                  <Col md={6} className="left-col">
                     <Gallery images={images} />
                  </Col>
                  <Col md={6} className="righ-col">
                     <h2 className="product-title">{title}</h2>
                     <StarRating rating={rating} review={review} />
                     <Row>
                        <Col md={12}>
                           <p>Brand: <b>{brand}</b></p>
                        </Col>
                        <Col md={12}>
                           <p>Availability: <b>{stock > 0 ? 'InStock' : 'OutOfStock'}</b></p>
                        </Col>
                     </Row>
                     <p>
                        MRP <del><PriceFormat price={price + 1250} /></del>
                     </p>
                     <p>
                        Deal of the day: <b><PriceFormat price={price} /></b>
                     </p>
                     <p>
                        {description}
                     </p>
                     <div className='product-warranty-info d-flex'>
                        <div className='product-free-delivery me-2 text-center'>
                           <TbTruckDelivery size={40} />
                           <p>Free Delivery</p>
                        </div>
                        <div className='product-free-delivery me-2 text-center'>
                           <TbReplace size={40} />
                           <p>30 Days Replacement</p>
                        </div>
                        <div className='product-free-delivery me-2 text-center'>
                           <TbTruckDelivery size={40} />
                           <p>Trust Delivery</p>
                        </div>
                        <div className='product-free-delivery text-center'>
                           <MdOutlineSecurity size={40} />
                           <p>2years Warranty</p>
                        </div>
                     </div>
                     <hr className="border border-dark border-1 opacity-40"></hr>
                     <AddToCart product={singleRawData} />
                  </Col>
               </Row>
            </Container>
         </main>
         <Footer />
      </>
   )
}

export default SingleProduct;