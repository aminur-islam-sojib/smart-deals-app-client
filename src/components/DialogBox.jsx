import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const DialogBox = ({ productItem, dialogRef }) => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const imageURL = form.imageURL.value;
    const offerPrice = form.offerPrice.value;
    const contact = form.contact.value;
    console.log(name, email, imageURL, offerPrice, contact);

    const newBids = {
      product: productItem?._id,
      buyer_image: imageURL,
      buyer_name: name,
      buyer_contact: contact,
      buyer_email: email,
      bid_price: offerPrice,
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBids),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dialogRef.current.close();
        toast.success("Add Bids Successfully!");
      });

    e.target.reset();
  };

  return (
    <div className="modal-box">
      <div className="max-w-lg mx-auto border-2 border-dashed border-blue-300 p-6 rounded-lg">
        <h2 className="text-center text-xl font-bold mb-4">
          Give Seller Your Offered Price
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Buyer Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">
                Buyer Name <span className=" text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder={user?.name || "Your Name"}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Buyer Email <span className=" text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder={user?.email || "Your Email"}
                defaultValue={user?.email}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Buyer Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Buyer Image URL <span className=" text-red-500">*</span>
            </label>
            <input
              type="text"
              name="imageURL"
              placeholder={user?.photoURL || "https://...your_img_url"}
              defaultValue={user?.photoURL}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Offer Price */}
          <div>
            <label className="block text-sm font-medium mb-1">
              <div>
                {" "}
                <h1>
                  Place your Price <span className=" text-red-500">*</span>
                </h1>
              </div>{" "}
              <p className=" absolute top-0 right-0">*</p>
            </label>
            <input
              type="text"
              name="offerPrice"
              placeholder="e.g. Artisan Roasters"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Contact Info
            </label>
            <input
              type="text"
              name="contact"
              placeholder="e.g. +1-555-1234"
              className="input input-bordered w-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <form method="dialog">
              <button className="btn btn-outline">Cancel</button>
            </form>
            <button type="submit" className="btn btn-primary">
              Submit Bid
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialogBox;
