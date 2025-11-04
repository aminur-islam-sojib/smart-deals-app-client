import { useRef, useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Mail,
  Phone,
  Clock,
  Tag,
  Package,
} from "lucide-react";
import { useLoaderData } from "react-router";
import DialogBox from "../components/DialogBox";
import BidsTable from "../components/ProductsBids";

const ProductListing = () => {
  const [imageError, setImageError] = useState(false);
  const dialogRef = useRef();
  const product = useLoaderData();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const handleModalOpen = () => {
    dialogRef.current.showModal();
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back To Products</span>
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
              {/* Left Column - Image */}
              <div className="space-y-4">
                <div className="aspect-square bg-linear-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden shadow-inner">
                  {!imageError ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package size={80} className="text-slate-300" />
                    </div>
                  )}
                </div>

                {/* Product Description Card */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Product Description
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-slate-500">Condition:</span>
                      <p className="font-medium text-slate-900 capitalize">
                        {product.condition}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-slate-500">
                        Usage Time:
                      </span>
                      <p className="font-medium text-slate-900">
                        {product.usage}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-slate-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                    {product.title}
                  </h1>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    <Tag size={14} />
                    {product.category}
                  </span>
                </div>

                {/* Price */}
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="text-3xl font-bold text-green-600">
                    ${product.price_min} - ${product.price_max}
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    Price range (negotiable)
                  </p>
                </div>

                {/* Product Details */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Product Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Product ID:</span>
                      <span className="font-mono text-sm text-slate-900">
                        {product?._id.slice(0, 16)}...
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Posted:</span>
                      <span className="text-slate-900 font-medium">
                        {formatDate(product.created_at)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Seller Information */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Seller Information
                  </h3>

                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-200">
                    <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {product.seller_name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {product.seller_name}
                      </p>
                      <p className="text-sm text-slate-500">{product.email}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700">
                      <MapPin size={18} className="text-slate-400" />
                      <span>{product.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <Phone size={18} className="text-slate-400" />
                      <span>{product.seller_contact}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-slate-400" />
                      <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium capitalize">
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={handleModalOpen}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  I Want To Buy This Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <DialogBox productItem={product} dialogRef={dialogRef} />
      </dialog>

      <BidsTable productItem={product} />
    </>
  );
};

export default ProductListing;
