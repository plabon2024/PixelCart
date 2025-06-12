import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "../components/Card";

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

  const filteredProducts = showAvailableOnly
    ? products.filter((product) => product.minquantity > 100)
    : products;
if (products.length===0) {
  return <div className="h-screen flex justify-center items-center">Loading product data...</div>;
}
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">All Product</h1>

      <div className="flex justify-between items-center mb-4 container mx-auto">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setShowAvailableOnly(!showAvailableOnly)}
        >
          {showAvailableOnly ? "Show All Products" : "Show Available Products"}
        </button>

        <select
          className="border border-gray-300 rounded p-2"
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {viewMode === "card" ? (
        <div className="flex flex-wrap justify-center lg:justify-between mx-auto container gap-5">
          {filteredProducts.map((product) => (
            <Card product={product}>
              {" "}
              <Link key={product._id} to={`/upadateprocuct/${product._id}`}>
                <button className="btn font-bold">Update</button>{" "}
              </Link>
            </Card>
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
