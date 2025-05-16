import { useCart } from "../context/CartContext";
import { useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext"; // Import UserContext to get user data

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const { user } = useUser(); // Get user from UserContext

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      setStatus("Your cart is empty. Please add items before placing an order.");
      return;
    }

    const order = {
      ...form,
      total: Number(total),
      items: cart,
      createdAt: new Date(),
      userEmail: user.email, // Add user's email to the order
    };

    try {
      await axios.post("https://restorestaurent.netlify.app/api/orders", order);
      setStatus("✅ Order placed successfully!");
      clearCart();
    } catch (err) {
      console.error("Checkout error:", err);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-white to-green-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-600">
          Checkout
        </h2>

        {/* Order Summary */}
        <div className="mb-10 border p-6 rounded-2xl bg-gray-50 shadow-inner">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">🛒 Order Summary</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500 italic">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between mb-3 text-gray-700"
                >
                  <div>{item.name} x {item.quantity}</div>
                  <div>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
              <hr className="my-4 border-gray-300" />
              <div className="flex justify-between text-xl font-bold text-green-700">
                <span>Total:</span>
                <span>${Number(total).toFixed(2)}</span>
              </div>
            </>
          )}
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-5 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-5 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 px-5 py-3 rounded-lg shadow-sm resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />

          <button
            type="submit"
            className={`w-full text-center font-semibold py-3 rounded-xl transition-all ${
              cart.length === 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-red-500 text-white hover:opacity-90"
            }`}
            disabled={cart.length === 0}
          >
            Place Order
          </button>
        </form>

        {status && (
          <p className="mt-6 text-center text-lg font-medium text-red-600">{status}</p>
        )}
      </div>
    </div>
  );
}
