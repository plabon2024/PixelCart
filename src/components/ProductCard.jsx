import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ProductCard = ({ productId }) => {
  const axiosSecure = useAxiosSecure();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_baseurl}/product/${productId}`)
      .then((res) => setProduct(res.data));
  }, [productId, axiosSecure]);
  console.log(product);
  if (!product){
       return(
       <div className="flex justify-center items-center">
      <span className="loading loading-spinner loading-xl"></span>
    </div>
    )
  }
 
  
   
  return (
    <div className="flex items-center gap-3">
      <div className="avatar">
        <div className="mask mask-squircle h-20 w-20">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div>
        <div className="font-bold">{product.name}</div>
        <div className="text-sm opacity-50 w-64">{product.description}</div>
        <div className="text-sm opacity-50">Made by :{product.brandname}</div>
      </div>
      <div>
        <div className="font-bold">{product.category}</div>
        <div className="text-sm opacity-50">
          Min Buy : {product.minquantity}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
