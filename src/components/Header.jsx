import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);

  return (
    <>
      <div className=" sticky top-0 z-50">
        <div className="navbar   rounded-3xl container mx-auto mb-2 flex justify-center items-center ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                <li>
                  <NavLink className="btn mx-2" to={"/"}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink className="btn mx-2" to={"/categories"}>
                    Categories
                  </NavLink>
                </li>

                {!user ? (
                  <>
                    <li>
                      <NavLink className="btn mx-2" to={"/login"}>
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn mx-2" to={"/signup"}>
                        Sign Up
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink className="btn mx-2" to={"/allproduct"}>
                        All Product
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn mx-2" to={"/addproduct"}>
                        Add Product
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn mx-2" to={"/myproduct"}>
                        My Product
                      </NavLink>
                    </li>
                  </>
                )}

                <li>
                  <NavLink className="btn mx-2" to={"/cart"}>
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
            <a className="font-bold font-serif pl-5 text-xl uppercase">
              PixelCart
            </a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink className="btn mx-2" to={"/"}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className="btn mx-2" to={"/categories"}>
                  Categories
                </NavLink>
              </li>

              <li>
                <NavLink className="btn mx-2" to={"/cart"}>
                  Cart
                </NavLink>
              </li>

              {!user ? (
                <>
                  <li>
                    <NavLink className="btn mx-2" to={"/login"}>
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn mx-2" to={"/signup"}>
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink className="btn mx-2" to={"/allproduct"}>
                      All Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn mx-2" to={"/addproduct"}>
                      Add Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn mx-2" to={"/myproduct"}>
                      My Product
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="navbar-end mr-3">
            <div>
              {user ? (
                <div
                  className="dropdown dropdown-left "
                  data-tooltip-id="my-tooltip"
                >
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        referrerPolicy="no-referrer"
                        alt="profilePhoto"
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                      />
                    </div>
                  </div>

                  <div
                    tabIndex={0}
                    className="menu menu-sm dropdown-content  shadow w-fit"
                  >
                    <h1 className="btn outline-none border-none    rounded-sm">
                      {user.displayName}
                    </h1>
                    <h1 className="btn outline-none border-none    rounded-sm">
                      {user.email}
                    </h1>
                    <button
                      className="btn outline-none border-none rounded-sm"
                      onClick={signOutUser}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
