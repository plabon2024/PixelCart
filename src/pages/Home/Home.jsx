import React, { useEffect } from "react";
import Banner from "./Banner";
import ProductCategories from "./ProductCategories";
import Faq from "./Faq";
import SomePorduct from "./SomePorduct";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <ProductCategories></ProductCategories>
      <SomePorduct></SomePorduct>
      <Faq></Faq>
    </div>
  );
};

export default Home;
