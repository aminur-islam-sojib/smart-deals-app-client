import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  console.log(user?.accessToken);

  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/myProducts?email=${user?.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Barer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, [user]);

  console.log(myProducts);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Product Name</th>
            <th>Min Price</th>
            <th></th>
          </tr>
        </thead>
        {myProducts.map((product, index) => (
          <tbody className=" border-t border-gray-300">
            {/* row 1 */}
            <tr>
              <th>
                <label> {index + 1}</label>
              </th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{product?.title}</td>
              <td>{product?.price_min}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyProducts;
