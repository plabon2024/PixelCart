import React from "react";
import { FaMusic, FaUtensils } from "react-icons/fa";
import { FcElectronics } from "react-icons/fc";
import { GiClothes, GiFruitBowl, GiWashingMachine } from "react-icons/gi";

const ProductCategories = () => {
  return (
    <div className="container mx-auto my-5 ">
      <h1 className="text-center font-bold text-3xl py-5">
        {" "}
        Our Product Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
        <div className="card card-side bg-base-100 shadow-2xl p-10">
          <figure>
            <GiClothes size={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Apparel</h2>
            <p></p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-2xl p-10">
          <figure>
            <GiWashingMachine size={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Home Appliance</h2>
            <p></p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-2xl p-10">
          <figure>
            <GiFruitBowl size={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fruits & Vegetables </h2>
            <p></p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-2xl p-10">
          <figure>
            <FaMusic size={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Arts & Music</h2>
            <p></p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-2xl p-10">
          <figure>
            <FcElectronics size={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Electronics</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
