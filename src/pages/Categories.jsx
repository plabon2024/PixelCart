import { useNavigate } from "react-router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import Card from "../components/Card";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const { selectedCategory, setSelectedCategory } = useAuth();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseurl}/allproduct`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (products.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading product data...
      </div>
    );
  }
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        {selectedCategory}{" "}
      </h1>

      <div className="flex flex-col justify-center items-center container mx-auto">
        {/* Category Selector */}
        <div className="w-full flex justify-center mb-8">
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-72 shadow-primary shadow focus:outline-primary rounded px-4 py-2"
          >
            <option value="">Select a category</option>
            <option>Electronics & Gadgets</option>
            <option>Home & Kitchen Appliances</option>
            <option>Fashion & Apparel</option>
            <option>Industrial Machinery & Tools</option>
            <option>Health & Beauty</option>
            <option>Office Supplies & Stationery</option>
          </select>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {filteredProducts.map((product) => (
            <Link key={product._id} to={`/product/${product._id}`}>
              <Card product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
