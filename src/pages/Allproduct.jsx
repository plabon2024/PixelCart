import axios from "axios";
import React, { useEffect, useState } from "react";

const Allproduct = () => {
  const [products, setProducts] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState("card");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseurl}/allproduct`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filtered product list
  const filteredProducts = showAvailableOnly
    ? products.filter((product) => product.minquantity > 100)
    : products;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">All Product</h1>

      {/* Filter Button */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setShowAvailableOnly(!showAvailableOnly)}
        >
          {showAvailableOnly ? "Show All Products" : "Show Available Products"}
        </button>

        {/* View Toggle Dropdown */}
        <select
          className="border border-gray-300 rounded p-2"
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {/* Conditionally Render View */}
      {viewMode === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="text-sm text-gray-600">
                Min Qty: {product.Minimum_selling_quantity}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <table className="w-full border border-collapse mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Minimum Qty</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.description}</td>
                <td className="border p-2">
                  {product.Minimum_selling_quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Allproduct;

