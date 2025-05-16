import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function OrderHistoryPage() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      axios
        .get(`https://restorestaurent.netlify.app/api/orders/${user.email}`)
        .then((res) => {
          setOrders(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Order fetch error", err);
          setError("An error occurred while fetching your orders.");
          setLoading(false);
        });
    }
  }, [user]);

  // Reverse the orders to display the latest order first
  const reversedOrders = orders.reverse();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Order History
      </h2>

      {loading && (
        <p className="text-center text-gray-500">
          Loading your order history...
        </p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && orders.length === 0 && (
        <div className="text-center text-gray-800 mt-8">
          <p className="text-lg font-medium">No orders yet.</p>
          <Link
            to="/menu"
            className="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            Browse Menu
          </Link>
        </div>
      )}

      {!loading && !error && reversedOrders.length > 0 && (
        <div className="space-y-6 mt-8 mb-8">
          {reversedOrders.map((order, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-4">
                <p className="text-xl font-semibold text-gray-700">
                  <strong>Date:</strong>{" "}
                  {new Date(order.createdAt).toLocaleString()}
                </p>
                <p className="text-xl font-semibold text-gray-700">
                  <strong>Total:</strong> ${order.total.toFixed(2)}
                </p>
              </div>
              <p className="text-lg text-gray-600">
                <strong>User:</strong> {order.user.name}
              </p>
              <ul className="list-disc ml-6 mt-4 text-gray-600">
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.name} x {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
