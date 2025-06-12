import React from "react";

const Card = ({ product,children  }) => {
  return (
    <>
      <div className="card bg-base-100 w-sm shadow-sm p-5">
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
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-sm text-gray-600">
            Main Qty: {product.mainquantity}
          </p>
          <p className="text-sm text-gray-600">
            Min Qty: {product.minquantity}
          </p>
          <p className="text-sm text-gray-600">Category: {product.category}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
