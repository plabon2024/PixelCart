import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Cart = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`${import.meta.env.VITE_baseurl}/orders/${user.email}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.email]);

  const handleCancel = async (id, quantity, productId) => {
    try {
      // Delete the order
      await axios.delete(`${import.meta.env.VITE_baseurl}/order/${id}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));

      // Update the product quantity
      await axios.patch(
        `${import.meta.env.VITE_baseurl}/products/${productId}`,
        { quantity }
      );

      // Show success message
      Swal.fire("Success", "Order cancelled !", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };
  if (orders.length <= 0) {
    return (
      <>
        <div className="h-screen flex justify-center items-center font-bold italic text-3xl">
          <div>
            <p>Cart is Empty</p>
            <Link to={"/allproduct"}>
              <button className="btn">view products</button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Ordered</th>
              <th>Ordered Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  <ProductCard productId={order.productId}></ProductCard>
                </td>
                <td>
                  <p> {order.quantity} unite</p>
                </td>
                <td>
                  <p> {order.data} </p>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleCancel(order._id, order.quantity, order.productId)
                    }
                    className="btn btn-ghost btn-xs"
                  >
                    cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
