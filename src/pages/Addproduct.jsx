import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";

const Addproduct = () => {
  const handleAddGardener = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const product = Object.fromEntries(formData.entries());
    product.mainquantity = parseInt(product.mainquantity);
    product.minquantity = parseInt(product.minquantity);
    product.price = parseInt(product.price);
    product.rating = parseInt(product.rating);
    axios
      .post(`${import.meta.env.VITE_baseurl}/addproduct`, product)
      .then((res) => {
        alert("Product added successfully!");
        // form.reset();
      })
      .catch((err) => {
        alert("Something went wrong. Try again.");
        console.error(err);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleAddGardener}
        className="text-left overflow-x-auto container mx-auto my-10"
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
              placeholder="Enter Image URL"
              className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
              placeholder="Enter Product Name"
              className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
              placeholder="Enter Main Quantity"
              className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
              placeholder="Enter Minimum Selling Quantity"
              className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
              placeholder="Enter Brand Name"
              className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
              className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            >
              <option value="">Select a category</option>
              <option>Electronics & Gadgets</option>
              <option>Home & Kitchen Appliances</option>
              <option>Fashion & Apparel</option>
              <option>Industrial Machinery & Tools</option>
              <option>Health & Beauty</option>
              <option>Automotive Parts & Accessories</option>
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
              placeholder="Enter Description"
              className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
              className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
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
              className="w-full shadow-primary shadow focus:outline-primary rounded px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="text-xl btn btn-primary md:col-span-2 text-black border rounded p-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addproduct;
