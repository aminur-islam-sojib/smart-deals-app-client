import React from "react";

const Header = () => {
  return (
    <div className="bg-[linear-gradient(to_right,#FFE6FD_0%,#E0F8F5_100%)] p-6 py-10 rounded-xl">
      <h1 className=" text-5xl font-bold text-center">
        Deal your <span className=" text-primary">Products</span> <br /> in a{" "}
        <span className=" text-primary">Smart</span> way !
      </h1>
      <div className=" flex flex-col items-center justify-center gap-3 mt-5">
        <p>
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        <div className="join">
          <div>
            <label className="input validator join-item">
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              search For Products, Categories...
            </div>
          </div>
          <button className="btn btn-primary join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className=" flex gap-3">
          <button className="btn btn-primary">Watch All Products</button>
          <button className="btn btn-outline">Post An Products</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
