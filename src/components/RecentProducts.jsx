import { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const RecentProducts = () => {
  const [recentProducts, setRecentProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setRecentProducts(data));
  }, []);

  return (
    <div>
      <h1 className=" text-4xl font-black text-center py-5">
        Recent <span className=" text-primary">Products</span>
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-11/12 mx-auto pb-5">
        {recentProducts.map((product) => (
          <div key={product._id} className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src={product?.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp";
                }}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product?.title}</h2>
              <p className=" text-primary font-medium">
                ${product?.price_min} - {product?.price_max}
              </p>
              <div className=" flex justify-center w-full">
                <button className="btn btn-outline w-full">See Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;
