import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Card from "../components/Card";

const MyProduct = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseurl}/products/${user.email}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.email]);
  return (
    <div className="flex flex-wrap mx-auto justify-center items-center lg:justify-between container">
      {data.map((product) => (
      <Card product={product}></Card>
      ))}
    </div>
  );
};

export default MyProduct;
