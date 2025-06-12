import React, { use, useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import AuthContext from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { loading } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
