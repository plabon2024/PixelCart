import { useNavigate } from "react-router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const {selectedCategory, setSelectedCategory} = useAuth()

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

 
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4"></h1>

      <div className="flex justify-between items-center mb-4">
        <div className="w-full md:w-1/3">
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`}>
            <div className="border p-4 rounded shadow hover:shadow-lg">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-sm text-gray-600">Main Qty: {product.mainquantity}</p>
              <p className="text-sm text-gray-600">Min Qty: {product.minquantity}</p>
              <p className="text-sm text-gray-600">Category: {product.category}</p>
              <img
                src={product.image}
                width={100}
                className="object-cover"
                alt={product.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
