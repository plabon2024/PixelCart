import React, { useEffect } from "react";
import Banner from "./Banner";
import ProductCategories from "./ProductCategories";
import Faq from "./Faq";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <ProductCategories></ProductCategories>
      <Faq></Faq>
    </div>
  );
};

export default Home;
