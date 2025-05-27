
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptNumber: string;
  state: string;
  zip: string;
}

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptNumber: "",
    state: "",
    zip: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveAddress = () => {
    console.log("Address saved:", formData);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      streetAddress: "",
      aptNumber: "",
      state: "",
      zip: ""
    });
  };

  const handlePlaceOrder = () => {
    console.log("Order placed with address:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-black">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-medium text-black">Shipping Address</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Address Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-lg font-medium">Add New Address</span>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apt Number
                  </label>
                  <input
                    type="text"
                    name="aptNumber"
                    value={formData.aptNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zip
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleCancel}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  cancel
                </button>
                <button
                  onClick={handleSaveAddress}
                  className="flex-1 py-3 px-4 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
                >
                  Save This Address
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:pl-8">
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 mb-4">
                By placing your order, you agree to our company{" "}
                <span className="underline cursor-pointer">Privacy policy</span> and{" "}
                <span className="underline cursor-pointer">Conditions of use</span>.
              </p>

              <h3 className="text-lg font-medium mb-4">Order Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Items - Silhouette No. 1 – Vermillion</span>
                  <span>7,999</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping and handling:</span>
                  <span>200</span>
                </div>
                <div className="flex justify-between">
                  <span>Before tax:</span>
                  <span>6,599</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Collected:</span>
                  <span>1,400</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between text-lg font-medium">
                  <span>Order Total:</span>
                  <span>8,199</span>
                </div>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-4 bg-black text-white rounded-md font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
