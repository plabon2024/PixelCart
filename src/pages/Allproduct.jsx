import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import Card from "../components/Card";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Allproduct = () => {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]);
  const axiosSecure = useAxiosSecure();

  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [viewMode, setViewMode] = useState("card");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_baseurl}/allproduct`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosSecure]);

  const filteredProducts = showAvailableOnly
    ? products.filter((product) => product.minquantity > 100)
    : products;
  if (products.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">All Product</h1>

      <div className="flex justify-between items-center mb-4 container mx-auto">
        <button
          className="px-4 py-2 bg-slate-400 text-white rounded hover:bg-blue-700"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center items-center mx-auto container gap-5">
          {filteredProducts.map((product) => (
            <Card key={product._id} product={product}>
              {" "}
              <Link to={`/upadateprocuct/${product._id}`}>
                <button className="btn font-bold">Update</button>{" "}
              </Link>
            </Card>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto container mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th></th>
                <th>Price </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {filteredProducts.map((product) => (
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={product.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                        <div className="text-sm opacity-50 truncate">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.brandname}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {product.category}
                    </span>
                  </td>
                  <td>${product.price}</td>
                  <th>
                    <Link
                      key={product._id}
                      to={`/upadateprocuct/${product._id}`}
                    >
                      <button className="btn font-bold  btn-ghost btn-xs">
                        Update
                      </button>{" "}
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Allproduct;
