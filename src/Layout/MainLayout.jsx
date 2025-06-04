import React, { use } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import AuthContext from "../contexts/AuthContext";

const MainLayout = () => {
  const { loading } = use(AuthContext);
  return (
    <>
      <Header></Header>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <>
          <Outlet></Outlet>

    
        </>
      )}
    </>
  );
};

export default MainLayout;
