import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const Cart = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.email) return; // prevent request if user is undefined

    axios
      .get(`${import.meta.env.VITE_baseurl}/orders/${user.email}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.email]);

  return (
    <div>
      {orders.map((order) => (
        <div key={order._id}> {/* changed from order_id to order._id */}
          <p>{order.buyerEmail}</p>
          <p>{order.buyerName}</p>
          <p>{order.productId}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
