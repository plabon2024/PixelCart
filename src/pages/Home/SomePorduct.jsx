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
          <div key={product._id} className="flex items-center  justify-center hover:scale-105 transition-all ">
            <div>
              <div className="card bg-base-100 max-w-sm shadow-xl h-[500px]">
                <figure>
                  <img
                    src={product.image}
                    alt="Shoes"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-start">
                  <div className="flex flex-col space-y-1">
                    <h1 className="card-title text-2xl font-semibold ">
                      {product.name}
                    </h1>


                    <p className="text-gray-600 text-sm">{product.category}</p>
                    <p className="text-gray-500 text-sm">
                      By: {product.brandname}
                    </p>

                 

                    <p className="text-lg font-bold text-green-600 flex justify-between items-center">
                      $ {product.price}<Link to={`/product/${product._id}`}>
                        <button className="btn btn-ghost">Details</button>
                      </Link>
                    </p>

                    <div className="card-actions justify-start items-start">
                      
                    </div>
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
