import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Card from "../components/Card";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyProduct = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();
  const [data, setData] = useState(null);
  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_baseurl}/products/${user.email}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.email, axiosSecure]);

  const handledelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete the changes?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure
          .delete(`${import.meta.env.VITE_baseurl}/product/${id}`)
          .then((res) => {
            setData((products) =>
              products.filter((product) => product._id !== id)
            );
          });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted !",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (result.isDenied) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: " not Delete !",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center font-bold italic text-3xl">
        <div>
          <p>No Product Found !</p>
          <Link to={"/addproduct"}>
            <button className="btn">Add products</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-wrap mx-auto justify-center items-center lg:justify-between container">
      {data.map((product) => (
        <Card key={product._id} product={product}>
          <div className=" flex justify-between">
            <Link to={`/upadateprocuct/${product._id}`}>
              <button className="btn font-bold  btn-ghost btn-xs">
                Update
              </button>{" "}
            </Link>{" "}
            <button
              onClick={() => handledelete(product._id)}
              className="btn font-bold  btn-ghost btn-xs"
            >
              Delete
            </button>{" "}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MyProduct;
