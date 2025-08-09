import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";

import axios from "axios";
import Modal from "../components/Modal";
import { Rating } from "@smastrom/react-rating";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Details = () => {
  const axiosSecure = useAxiosSecure();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_baseurl}/product/${id}`)
      .then((res) => setProduct(res.data));
  }, [id, axiosSecure]);

  if (!product)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  return (
    <div className="min-h-screen bg-base-200 p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-base-100 shadow-xl rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Image */}
        <div className="flex flex-col items-center">
          <figure className="bg-base-300 rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </figure>

          {/* Thumbnail Images (Optional) */}
          <div className="flex gap-3 mt-4">
            {[product.image, product.image2, product.image3].map(
              (img, idx) =>
                img && (
                  <img
                    key={idx}
                    src={img}
                    alt="Thumbnail"
                    className="w-20 h-20 object-cover border rounded cursor-pointer hover:border-primary"
                  />
                )
            )}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col space-y-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Rating
              style={{ maxWidth: 120 }}
              value={parseInt(product.rating)}
              readOnly
            />
            <span className="text-yellow-500 font-semibold">
              {Number(product.rating).toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm">(120 reviews)</span>
          </div>

          {/* Price */}
          <p className="text-4xl font-bold text-green-600">${product.price}</p>

          {/* Description */}
          <p className="text-gray-700">{product.description}</p>

          {/* Product Info */}
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
            <p>
              Category: <span className="font-medium">{product.category}</span>
            </p>
            <p>
              Brand: <span className="font-medium">{product.brandname}</span>
            </p>
            <p>
              Main Qty:{" "}
              <span className="font-medium">{product.mainquantity}</span>
            </p>
            <p>
              Min Buy Qty:{" "}
              <span className="font-medium">{product.minquantity}</span>
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <label className="font-medium">Quantity:</label>
            <input
              type="number"
              min={product.minquantity}
              defaultValue={product.minquantity}
              className="input input-bordered w-20"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">
            <button
              className="btn btn-primary flex-1"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Buy Now
            </button>
            
          </div>

          {/* Extra Info */}
          <p className="text-sm text-gray-500">
            More Information: {product.Content}
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal product={product} />
    </div>
  );
};

export default Details;
