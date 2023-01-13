import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSlider from '../components/home/HeroSlider';
import ProductCategory from '../components/home/ProductCategory';
 
const Home = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSlider />
                <ProductCategory />
                
            </main>
            <Footer />
        </>
    )
}

export default Home