import React from "react";
import { FaFolderOpen, FaMusic, FaUtensils } from "react-icons/fa";
import { FcElectronics } from "react-icons/fc";
import { GiClothes, GiFruitBowl, GiWashingMachine } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { motion } from "motion/react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const ProductCategories = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const { setSelectedCategory } = useAuth();
  return (
    <div className="container mx-auto my-5 ">
      <h1 className="text-center font-bold text-3xl py-5">
        {" "}
        Our Product Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
        {/* Card 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          variants={contentVariants}
        >
          <Link
            onClick={() => setSelectedCategory("Fashion & Apparel")}
            to={"/Categories"}
          >
            <div className="card card-side bg-base-100 shadow-2xl p-10 min-h-48">
              <figure>
                <GiClothes size={60} />
              </figure>
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title text-center">Fashion & Apparel</h2>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          variants={contentVariants}
        >
          <Link
            onClick={() => setSelectedCategory("Home & Kitchen Appliances")}
            to={"/Categories"}
          >
            <div className="card card-side bg-base-100 shadow-2xl p-10 min-h-48">
              <figure>
                <GiWashingMachine size={60} />
              </figure>
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title text-center">
                  Home & Kitchen Appliances
                </h2>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          variants={contentVariants}
        >
          <Link
            onClick={() => setSelectedCategory("Health & Beauty")}
            to={"/Categories"}
          >
            <div className="card card-side bg-base-100 shadow-2xl p-10 min-h-48">
              <figure>
                <MdHealthAndSafety size={60} />
              </figure>
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title text-center">Health & Beauty</h2>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          variants={contentVariants}
        >
          <Link
            onClick={() => setSelectedCategory("Office Supplies & Stationery")}
            to={"/Categories"}
          >
            <div className="card card-side bg-base-100 shadow-2xl p-10 min-h-48">
              <figure>
                <FaFolderOpen size={60} />
              </figure>
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title text-center">
                  Office Supplies & Stationery
                </h2>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          variants={contentVariants}
        >
          <Link
            onClick={() => setSelectedCategory("Electronics & Gadgets")}
            to={"/Categories"}
          >
            <div className="card card-side bg-base-100 shadow-2xl p-10 min-h-48">
              <figure>
                <FcElectronics size={60} />
              </figure>
              <div className="card-body flex flex-col justify-center">
                <h2 className="card-title text-center">
                  Electronics & Gadgets
                </h2>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCategories;
