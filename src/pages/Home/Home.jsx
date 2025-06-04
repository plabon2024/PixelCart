import React from 'react';
import Banner from './Banner';
import ProductCategories from './ProductCategories';
import Faq from './Faq';
import Footer from '../../components/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;