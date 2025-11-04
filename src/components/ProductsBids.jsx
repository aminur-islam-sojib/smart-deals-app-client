import React, { useEffect, useState } from "react";

const BidsTable = ({ productItem }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/bids/${productItem?._id}`)
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, [productItem]);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">
        Bids For This Product:{" "}
        <span className="text-purple-500">
          {bids.length.toString().padStart(2, "0")}
        </span>
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th>SL No</th>
              <th>Buyer</th>
              <th>Contact</th>
              <th>Bid Price</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, index) => (
              <tr key={bid._id} className="hover:bg-gray-50">
                <td>{index + 1}</td>
                <td className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                      <img src={bid.buyer_image} alt={bid.buyer_name} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{bid.buyer_name}</p>
                    <p className="text-sm text-gray-500">{bid.buyer_email}</p>
                  </div>
                </td>
                <td>{bid.buyer_contact}</td>
                <td className="font-semibold text-gray-800">
                  ${bid.bid_price}
                </td>
                <td>
                  <span
                    className={`badge ${
                      bid.status === "confirmed"
                        ? "badge-success"
                        : "badge-warning"
                    } badge-outline`}
                  >
                    {bid.status}
                  </span>
                </td>
                <td className="text-center space-x-2">
                  <button className="btn btn-xs bg-green-100 text-green-600 hover:bg-green-200 border-green-300">
                    Accept Offer
                  </button>
                  <button className="btn btn-xs bg-red-100 text-red-600 hover:bg-red-200 border-red-300">
                    Reject Offer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidsTable;
