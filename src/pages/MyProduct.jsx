import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const MyProduct = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseurl}/products/${user.email}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.email]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-auto container">
      {data.map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-lg rounded-2xl p-4 flex flex-col space-y-3  hover:shadow-xl transition"
        >
          <div className="avatar">
            <div className="w-sm rounded mx-auto">
              {" "}
              <img
                src={product.image}
                alt={product.name}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.category}</p>
            <p className="text-gray-500 text-sm">By: {product.brandname}</p>
            <p className="text-sm">{product.description}</p>
            <p className="font-semibold text-green-600">${product.price}</p>

            <div className="flex items-center">
              <Rating
                style={{ maxWidth: 100 }}
                value={product.rating}
                readOnly
              />
              <span className="ml-2 font-semibold">
                {product.rating.toFixed(2)}
              </span>
            </div>
            {/* ,<p className="text-yellow-500">Rating: {product.rating}★</p> */}
            <p className="text-xs text-gray-400">User: {product.useremail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProduct;
