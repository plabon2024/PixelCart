import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { Link } from "react-router";

const SomePorduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseurl}/allproduct`)
      .then((res) => {
        setProducts(res.data.slice(0, 6));
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

      <div className="flex flex-wrap container mx-auto justify-center items-center gap-5 mb-20">
        {products.map((product) => (
          <div key={product._id} className="flex items-center  justify-center ">
            <div>
              <div className="card bg-base-100 w-sm shadow-xl h-[623px]">
                <figure className="px-10 pt-10">
                  <img
                    src={product.image}
                    alt="Shoes"
                    className="rounded-xl h-64"
                  />
                </figure>
                <div className="card-body items-center text-start">
                  <div className="flex flex-col space-y-1">
                    <h1 className="card-title text-2xl font-semibold text-primary">
                      {product.name}
                    </h1>

                    <p>{product.description}</p>

                    <p className="text-gray-600 text-sm">{product.category}</p>
                    <p className="text-gray-500 text-sm">
                      By: {product.brandname}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <p>
                        Min Buy Qty:{" "}
                        <span className="font-semibold">
                          {product.minquantity}
                        </span>
                      </p>
                    </div>

                    <p className="text-lg font-bold text-green-600">
                      $ {product.price}
                    </p>

                    <div className="card-actions justify-start items-start">
                      <Link to={`/product/${product._id}`}>
                        <button className="btn btn-ghost">Details</button>
                      </Link>
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
