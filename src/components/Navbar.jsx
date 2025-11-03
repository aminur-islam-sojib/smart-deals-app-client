import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to={"/"}> Home </NavLink>
      <NavLink to={"/all-products"}> All Products </NavLink>
      <NavLink to={"/my-products"}> My Products </NavLink>
      <NavLink to={"/my-bids"}> My Bids </NavLink>
      <NavLink to={"/create-products"}> Create Products </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      <div className="navbar-start ">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="  text-3xl font-bold ">
          Smart<span className=" text-primary">Deals</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        {user ? (
          <button onClick={() => logOut()} className="btn btn-outline">
            Log Out
          </button>
        ) : (
          <Link to={"/login"} className="btn btn-outline">
            Login
          </Link>
        )}
        <Link to={"/register"} className="btn btn-primary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
