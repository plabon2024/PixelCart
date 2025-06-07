import React from "react";
import { FaFolderOpen, FaMusic, FaUtensils } from "react-icons/fa";
import { FcElectronics } from "react-icons/fc";
import { GiClothes, GiFruitBowl, GiWashingMachine } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { motion } from "motion/react"

const ProductCategories = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
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
            <h2 className="card-title">Fashion & Apparel</h2>
            <p></p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-2xl p-10">
          <figure>
            <GiWashingMachine size={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Home & Kitchen Appliances</h2>
            <p></p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-2xl p-10">
          <figure>
            <MdHealthAndSafety size={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Health & Beauty </h2>
            <p></p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          variants={contentVariants}
          
        >
          <div className="card card-side bg-base-100 shadow-2xl p-10">
            <figure>
              <FaFolderOpen size={60} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Office Supplies & Stationery</h2>
              <p></p>
            </div>
          </div>
        </motion.div>

        <div className="card card-side bg-base-100 shadow-2xl p-10">
          <figure>
            <FcElectronics size={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Electronics & Gadgets</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
