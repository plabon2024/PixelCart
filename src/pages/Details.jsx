import { useParams } from "react-router";
import { useEffect, useState } from "react";

import axios from "axios";
import Modal from "../components/Modal";
import { Rating } from "@smastrom/react-rating";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseurl}/product/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="h-screen items-center flex justify-center ">
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={product.image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-start">
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
              </div>{" "}
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
