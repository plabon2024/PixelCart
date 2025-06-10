import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyProduct = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseurl}/product/${user.email}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ms-auto container">
  {data.map((product) => (
    <div
      key={product._id}
      className="bg-white shadow-lg rounded-2xl p-4 flex flex-col space-y-3 border hover:shadow-xl transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="flex flex-col space-y-1">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.category}</p>
        <p className="text-gray-500 text-sm">By: {product.brandname}</p>
        <p className="text-sm">{product.description}</p>
        <p className="font-semibold text-green-600">${product.price}</p>
        <p className="text-yellow-500">Rating: {product.rating}★</p>
        <p className="text-xs text-gray-400">User: {product.useremail}</p>
      </div>
    </div>
  ))}
</div>

  );
};

export default MyProduct;
