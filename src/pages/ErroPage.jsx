import React from "react";
import { Link } from "react-router";

const ErroPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="font-bold text-8xl">404</h1>
        <p className="font-bold text-3xl">Page not found currently </p>
        <p>Sorry, we can't find such page.</p>
        <Link to={'/'} className="btn"><span className="font-extralight text-xl">&larr;</span> Back to Home</Link>
      </div>

    </div>
  );
};

export default ErroPage;
