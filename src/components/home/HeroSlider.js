import React from "react";
import SwiperCore, { Navigation, Autoplay , EffectFade } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import SliderImg1 from '../../assets/image/banner7.jpg';
import SliderImg2 from '../../assets/image/banner4.jpg';
import SliderImg3 from '../../assets/image/banner6.jpg';

SwiperCore.use([EffectFade, Navigation, Autoplay ]);

export default function HeroSlider() {


    return (
        <>
            <Swiper tag="section" wrapperTag="ul"
                spaceBetween={0}
                slidesPerView={1}
                navigation 
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                <SwiperSlide tag="li">
                    <div className="hero-image" style={{ backgroundImage: `url(${SliderImg1})` }}>
                        <h3 className="banner-heading">Fall Offer 2022 Collection</h3>
                        <h4 className="banner-main-heading">Sale Off 40%</h4>
                        <Link to="/products" className="shop-now-btn">Shop Now</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide tag="li">
                    <div className="hero-image" style={{ backgroundImage: `url(${SliderImg2})` }}>
                        <h3 className="banner-heading">Fall Offer 2022 Collection</h3>
                        <h4 className="banner-main-heading">Sale Off 40%</h4>
                        <Link to="/products" className="shop-now-btn">Shop Now</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide tag="li">
                    <div className="hero-image" style={{ backgroundImage: `url(${SliderImg3})` }}>
                        <h3 className="banner-heading">Fall Offer 2022 Collection</h3>
                        <h4 className="banner-main-heading">Sale Off 40%</h4>
                        <Link to="/products" className="shop-now-btn">Shop Now</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}