import { Rating } from "@smastrom/react-rating";
import React from "react";

const Card = ({ product, children }) => {
  return (
    <>
      <div className="card bg-base-100 w-sm shadow-sm min-h-[747px] hover:scale-105 transition-all">
        <div className="avatar p-5">
          <div className="w-sm rounded mx-auto">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="card-body text-start ">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-600 text-sm">{product.category}</p>
          <p className="text-gray-500 text-sm">By: {product.brandname}</p>
          <p className="text-gray-500">
            Min Buy Qty:{" "}
            <span>{product.minquantity}</span>
          </p>
          <p className="text-sm">{product.description}</p>
          <p className="font-semibold text-green-600">${product.price}</p>

          <div className="flex items-center">
            <Rating
              style={{ maxWidth: 100 }}
              value={parseInt(product.rating)}
              readOnly
            />
            <span className="ml-2 font-semibold text-yellow-600">
              {parseInt(product.rating).toFixed(2)}
            </span>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
