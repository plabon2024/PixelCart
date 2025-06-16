import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosSecure
      .get(`/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [id, axiosSecure]);

  const updateProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const product = Object.fromEntries(formData.entries());
    product.mainquantity = parseInt(product.mainquantity);
    product.minquantity = parseInt(product.minquantity);
    product.price = parseInt(product.price);
    product.rating = parseInt(product.rating);
    product.updatedby = user.email;
    axiosSecure
      .put(`/updateproduct/${id}`, product)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Updated successfully!",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong !",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };
  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  // console.log(product);
  return (
    <div>
      <form
        onSubmit={updateProducts}
        className="text-left overflow-x-auto container mx-auto my-10 p-5 shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-neutral">
          <div className="mb-6">
            <label htmlFor="image" className="block mb-2 font-medium">
              Image (URL)
            </label>
            <input
              id="image"
              type="text"
              name="image"
              required
              defaultValue={product.image}
              placeholder="Enter Image URL"
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              defaultValue={product.name}
              placeholder="Enter Product Name"
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="mainquantity" className="block mb-2 font-medium">
              Main Quantity
            </label>
            <input
              id="mainquantity"
              type="number"
              name="mainquantity"
              required
              defaultValue={product.mainquantity}
              placeholder="Enter Main Quantity"
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="minquantity" className="block mb-2 font-medium">
              Minimum Selling Quantity
            </label>
            <input
              id="minquantity"
              type="number"
              name="minquantity"
              required
              defaultValue={product.minquantity}
              placeholder="Enter Minimum Selling Quantity"
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            />
          </div>

          <div className="mb-6 col-span-2">
            <label htmlFor="brandname" className="block mb-2 font-medium">
              Brand Name
            </label>
            <input
              id="brandname"
              type="text"
              name="brandname"
              required
              defaultValue={product.brandname}
              placeholder="Enter Brand Name"
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block mb-2 font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              defaultValue={product.category}
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            >
              <option value="">Select a category</option>
              <option>Electronics & Gadgets</option>
              <option>Home & Kitchen Appliances</option>
              <option>Fashion & Apparel</option>
              <option>Industrial Machinery & Tools</option>
              <option>Health & Beauty</option>
              <option>Office Supplies & Stationery</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block mb-2 font-medium">
              Short Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              required
              defaultValue={product.description}
              placeholder="Enter Description"
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="price" className="block mb-2 font-medium">
              Price (Per Unit)
            </label>
            <input
              id="price"
              type="number"
              name="price"
              min="1"
              placeholder="Enter Price"
              required
              defaultValue={product.price}
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="rating" className="block mb-2 font-medium">
              Rating (1–5)
            </label>
            <input
              id="rating"
              type="number"
              name="rating"
              placeholder="Enter Rating"
              min="1"
              max="5"
              required
              defaultValue={product.rating}
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            />
          </div>
          <div className="mb-6 col-span-2">
            <label htmlFor="Content" className="block mb-2 font-medium">
              Product Content
            </label>
            <input
              id="Content"
              type="text"
              name="Content"
              placeholder="Enter Description"
              defaultValue={product.Content}
              className="w-full shadow-black shadow focus:outline-black rounded px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="text-xl btn btn-black md:col-span-2 text-black border rounded p-5"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
