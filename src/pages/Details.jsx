import { useParams } from "react-router";
import { useEffect, useState } from "react";

import axios from "axios";
import Modal from "../components/Modal";
import { Rating } from "@smastrom/react-rating";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Details = () => {
  const axiosSecure = useAxiosSecure();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_baseurl}/product/${id}`)
      .then((res) => setProduct(res.data));
  }, [id,axiosSecure]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="min-h-screen items-center flex justify-center ">
      <div>
        <div className="card bg-base-100 w-sm shadow-xl">
          <figure className="px-10 pt-10">
            <img src={product.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-start ">
            <div className="flex flex-col space-y-1 ">
              <h1 className="card-title text-2xl font-semibold text-primary">
                {product.name}
              </h1>

              <p>{product.description}</p>

              <p className="text-gray-600 text-sm">{product.category}</p>
              <p className="text-gray-500 text-sm">By: {product.brandname}</p>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <p>
                  Main Qty:{" "}
                  <span className="font-semibold">{product.mainquantity}</span>
                </p>
                <p>
                  Min Buy Qty:{" "}
                  <span className="font-semibold">{product.minquantity}</span>
                </p>
              </div>

              <p className="text-lg font-bold text-green-600">
                Price: $ {product.price}
              </p>

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
              <p>
                More information :{" "}
                <span className="text-gray-400">{product.Content}</span>
              </p>
              <div className="card-actions justify-start items-start">
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal product={product}></Modal>
    </div>
  );
};

export default Details;
