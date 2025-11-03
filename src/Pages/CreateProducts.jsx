import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";

export default function CreateProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    condition: "Brand New",
    usage: "",
    imageUrl: "",
    sellerName: "",
    sellerEmail: "",
    sellerContact: "",
    sellerImageUrl: "",
    location: "",
    description: "",
  });

  const categories = [
    "Electronics",
    "Furniture",
    "Vehicles",
    "Fashion",
    "Books",
    "Sports",
    "Home & Garden",
    "Toys",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate required fields
    if (
      !formData.title.trim() ||
      !formData.category ||
      !formData.minPrice.trim() ||
      !formData.sellerName.trim() ||
      !formData.sellerEmail.trim() ||
      !formData.sellerContact.trim() ||
      !formData.location.trim() ||
      !formData.description.trim()
    ) {
      toast.error("Please fill in all required fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    // Validate usage field if condition is "Used"
    if (formData.condition === "Used" && !formData.usage) {
      alert("Please specify product usage time for used items");
      return;
    }

    const newProduct = {
      title: formData.title,
      category: formData.category,
      price_min: formData.minPrice,
      price_max: formData.maxPrice,
      email: formData.email,
      created_at: new Date(),
      image: formData.imageUrl,
      location: formData.location,
      seller_image: formData.sellerImageUrl,
      seller_name: formData.sellerName,
      condition: formData.condition,
      usage: formData.usage,
      description: formData.description,
      seller_contact: formData.sellerContact,
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    Swal.fire({
      title: "Product Added Successfully!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            {/* Title and Category Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none appearance-none bg-white cursor-pointer"
                  required
                >
                  <option value="">Select a Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Min Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min Price You want to Sale ($){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleChange}
                  placeholder="e.g. 18.5"
                  step="0.01"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  required
                />
              </div>

              {/* Max Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Price You want to Sale ($)
                </label>
                <input
                  type="number"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleChange}
                  placeholder="Optional (default = Min Price)"
                  step="0.01"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
              </div>
            </div>

            {/* Condition and Usage Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Condition */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Condition
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="condition"
                      value="Brand New"
                      checked={formData.condition === "Brand New"}
                      onChange={handleChange}
                      className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500 cursor-pointer"
                    />
                    <span className="ml-2 text-gray-700">Brand New</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="condition"
                      value="Used"
                      checked={formData.condition === "Used"}
                      onChange={handleChange}
                      className="w-5 h-5 text-purple-600 border-gray-300 focus:ring-purple-500 cursor-pointer"
                    />
                    <span className="ml-2 text-gray-700">Used</span>
                  </label>
                </div>
              </div>

              {/* Product Usage time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Usage time{" "}
                  {formData.condition === "Used" && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  type="text"
                  name="usage"
                  value={formData.usage}
                  onChange={handleChange}
                  placeholder="e.g. 1 year 3 month"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  required={formData.condition === "Used"}
                />
              </div>
            </div>

            {/* Product Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Product Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              />
            </div>

            {/* Seller Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Seller Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seller Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  value={formData.sellerName}
                  onChange={handleChange}
                  placeholder="e.g. Artisan Roasters"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  required
                />
              </div>

              {/* Seller Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seller Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="sellerEmail"
                  value={formData.sellerEmail}
                  onChange={handleChange}
                  placeholder="leil31955@niord.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  required
                />
              </div>
            </div>

            {/* Contact and Image URL Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Seller Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seller Contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="sellerContact"
                  value={formData.sellerContact}
                  onChange={handleChange}
                  placeholder="e.g. +1-555-1234"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  required
                />
              </div>

              {/* Seller Image URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seller Image URL
                </label>
                <input
                  type="url"
                  name="sellerImageUrl"
                  value={formData.sellerImageUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Country"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Simple Description about your Product{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough....."
                rows="4"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-linear-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3.5 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Create A Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
