
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Link } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Silhouette No. 1 – Vermillion",
      price: 7999,
      size: "M",
      quantity: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/4255c83362904501ae0b45174ef14bf2/bf0b3dfdddde174e14a32c9b9f4c604f3331dced?placeholderIfAbsent=true"
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 200;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-medium mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-8">Your cart is empty</p>
            <Link 
              to="/" 
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-32 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-2">Size: {item.size}</p>
                      <p className="text-xl font-medium">₹ {item.price.toLocaleString()}</p>
                      
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 border-x border-gray-300">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, 0)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6 h-fit">
              <h3 className="text-lg font-medium mb-6">Order Summary</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹ {shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹ {tax.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>₹ {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-black text-white py-4 rounded-lg font-medium mt-6 block text-center hover:bg-gray-800 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
