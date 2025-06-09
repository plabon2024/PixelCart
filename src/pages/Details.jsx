import { useParams } from "react-router";
import { useEffect, useState } from "react";

import axios from "axios";
import Modal from "../components/Modal";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseurl}/product/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* other details */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button>
      <Modal product={product}></Modal>
    </div>
  );
};

export default Details;
