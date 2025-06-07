import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);

  return (
    <>
      <div className="navbar shadow-sm sticky bg-slate-200 rounded-3xl container mx-auto my-2 flex justify-center items-center z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content  bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
            >
              <li className="btn mx-2">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="btn mx-2">
                <Link to={"/"}>Categories</Link>
              </li>
              {!user ? (
                <>
                  <li className="btn mx-2">
                    <Link className="btn mx-2" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li className="btn mx-2">
                    <Link className="btn mx-2" to={"/signup"}>
                      Sign UP
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="btn mx-2">
                    <Link to={"/allproduct"}>All product</Link>
                  </li>
                  <li className="btn mx-2">
                    <Link to={"/addproduct"}>Add Product</Link>
                  </li>
                  <l className="btn mx-2">
                    <Link to={"/signup"}>My product</Link>
                  </l>
                </>
              )}
              <li className="btn mx-2">
                <Link to={"/signup"}>Cart</Link>
              </li>
            </ul>
          </div>
          <a className="font-bold font-serif pl-5 text-xl">
            wholesale-platform
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li className="btn mx-2">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="btn mx-2">
              <NavLink to={"/"}>Categories</NavLink>
            </li>{" "}
            <li className="btn mx-2">
              <Link to={"/signup"}>Cart</Link>
            </li>
            {!user ? (
              <>
                <li className="btn mx-2">
                  <Link className="btn mx-2" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="btn mx-2">
                  <Link className="btn mx-2" to={"/signup"}>
                    Sign UP
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="btn mx-2">
                  <Link to={"/allproduct"}>All product</Link>
                </li>
                <li className="btn mx-2">
                  <Link to={"/addproduct"}>Add Product</Link>
                </li>
                <l className="btn mx-2">
                  <Link to={"/signup"}>My product</Link>
                </l>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end mr-3">
          <div>
            {user ? (
              <>
                <div className="btn mx-2" onClick={signOutUser}>
                  signout
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
