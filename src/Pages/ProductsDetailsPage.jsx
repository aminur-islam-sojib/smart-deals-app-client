import React, { useState } from "react";
import {
  Heart,
  Share2,
  MapPin,
  Phone,
  Mail,
  Package,
  DollarSign,
  Clock,
  Tag,
  AlertCircle,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { useLoaderData } from "react-router";

// Component to handle product image with fallback
const ProductImage = ({ src, title, className }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    const firstLetter = title.charAt(0).toUpperCase();
    return (
      <div
        className={`${className} flex items-center justify-center bg-linear-to-br from-blue-400 to-purple-500`}
      >
        <span className="text-white text-9xl font-bold">{firstLetter}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      className={className}
      onError={() => setImageError(true)}
    />
  );
};

// Component to handle seller avatar with fallback
const SellerAvatar = ({ src, name }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);

    return (
      <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center ring-4 ring-blue-50">
        <span className="text-white text-xl font-bold">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50"
      onError={() => setImageError(true)}
    />
  );
};

export default function ProductDetailsPage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  // Product data
  const product = useLoaderData();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    } else {
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span className="font-medium">Back to Listings</span>
            </button>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full transition-all ${
                  isFavorite
                    ? "bg-red-50 text-red-500"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Badge */}
            {product.status === "sold" && (
              <div className="bg-linear-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center justify-center">
                <AlertCircle size={20} className="mr-2" />
                <span className="font-semibold text-lg">
                  This item has been sold
                </span>
              </div>
            )}

            {/* Image Section */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-video bg-linear-to-br from-blue-100 to-purple-100">
                <ProductImage
                  src={product.image}
                  title={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              <div className="flex items-center space-x-2 mb-6">
                <MapPin size={18} className="text-red-500" />
                <span className="text-gray-600">{product.location}</span>
                <span className="text-gray-300">•</span>
                <Clock size={18} className="text-gray-400" />
                <span className="text-gray-600 text-sm">
                  Posted on {formatDate(product.created_at)}
                </span>
              </div>

              {/* Price */}
              <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Price Range</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-gray-900">
                        ${product.price_min}
                      </span>
                      <span className="text-xl text-gray-500">-</span>
                      <span className="text-3xl font-bold text-gray-900">
                        ${product.price_max}
                      </span>
                    </div>
                  </div>
                  <DollarSign size={48} className="text-blue-500 opacity-20" />
                </div>
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Package size={16} className="mr-2" />
                    <span className="text-sm font-medium">Condition</span>
                  </div>
                  <p className="text-gray-900 font-semibold capitalize">
                    {product.condition}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm font-medium">Usage</span>
                  </div>
                  <p className="text-gray-900 font-semibold">{product.usage}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Tag size={16} className="mr-2" />
                    <span className="text-sm font-medium">Status</span>
                  </div>
                  <p className="text-gray-900 font-semibold capitalize">
                    {product.status}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Seller Info & Actions */}
          <div className="space-y-6">
            {/* Seller Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Seller Information
              </h3>

              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <SellerAvatar
                    src={product.seller_image}
                    name={product.seller_name}
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {product.seller_name}
                  </p>
                  <p className="text-sm text-gray-500">Verified Seller</p>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowContactInfo(!showContactInfo)}
                  className="w-full bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Show Contact Number
                </button>

                {showContactInfo && (
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 animate-fade-in">
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <Phone size={18} className="mr-3 text-blue-500" />
                        <a
                          href={`tel:${product.seller_contact}`}
                          className="font-medium hover:text-blue-600"
                        >
                          {product.seller_contact}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Mail size={18} className="mr-3 text-blue-500" />
                        <a
                          href={`mailto:${product.email}`}
                          className="font-medium hover:text-blue-600 break-all"
                        >
                          {product.email}
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <button className="w-full bg-linear-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <MessageCircle size={20} className="mr-2" />
                  Send Message
                </button>

                <button className="w-full border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-3 rounded-xl transition-all flex items-center justify-center">
                  <Mail size={20} className="mr-2" />
                  Email Seller
                </button>
              </div>

              {/* Safety Tips */}
              <div className="mt-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                <div className="flex items-start">
                  <AlertCircle
                    size={20}
                    className="text-yellow-600 mr-2 mt-0.5  shrink-0"
                  />
                  <div>
                    <p className="text-sm font-semibold text-yellow-800 mb-1">
                      Safety Tips
                    </p>
                    <ul className="text-xs text-yellow-700 space-y-1">
                      <li>• Meet in a safe, public location</li>
                      <li>• Check the item before purchase</li>
                      <li>• Pay only after collecting item</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Items Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-1 h-8 bg-linear-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
            Similar Items in {product.category}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Package size={48} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">
              No similar items found at the moment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
