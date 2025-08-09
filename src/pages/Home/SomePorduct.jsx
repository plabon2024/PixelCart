import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { Link } from "react-router";

const SomePorduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseurl}/topproduct`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">
        Some Of Our Product
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center mb-20">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex items-center  justify-center hover:scale-105 transition-all "
          >
            <div>
              <div className="card bg-base-100 max-w-sm shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Product Image */}
                <figure className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />

                  {/* Optional Discount Badge */}
                  {product.discount && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}%
                    </span>
                  )}
                </figure>

                {/* Product Details */}
                <div className="card-body text-start space-y-2">
                  {/* Product Name */}
                  <h1 className="card-title text-lg font-semibold line-clamp-2 hover:text-primary transition-colors">
                    {product.name}
                  </h1>

                  {/* Category & Brand */}
                  <p className="text-gray-500 text-xs uppercase">
                    {product.category}
                  </p>
                  <p className="text-gray-400 text-xs">
                    By: {product.brandname}
                  </p>

                  {/* Price & Details Button */}
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-bold text-green-600">
                      ${product.price}
                    </p>
                    <Link to={`/product/${product._id}`}>
                      <button className="btn btn-primary btn-sm">
                        View Details
                      </button>
                    </Link>
                  </div>

        
                </div>
              </div>
            </div>

            <Modal product={product}></Modal>
          </div>
        ))}
      </div>
    </>
  );
};

export default SomePorduct;
