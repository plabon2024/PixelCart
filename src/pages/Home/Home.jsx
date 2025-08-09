import React, { useEffect } from "react";
import Banner from "./Banner";
import ProductCategories from "./ProductCategories";
import Faq from "./Faq";
import SomePorduct from "./SomePorduct";
import CustomerReviews from "./CustomerReviews";
import { useLocation } from "react-router";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]);
  return (
    <div>
      <Banner></Banner>
      <ProductCategories></ProductCategories>
      <SomePorduct></SomePorduct>
      <CustomerReviews></CustomerReviews>
      <Faq></Faq>
    </div>
  );
};

export default Home;
