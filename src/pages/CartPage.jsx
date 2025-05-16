import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, incrementQty, decrementQty, clearCart, total } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Your cart is empty
        </h2>
        <Link to="/menu" className="text-red-500 underline hover:text-red-700">
          Go to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
        Your Cart
      </h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <button
                onClick={() => decrementQty(item.id)}
                className="px-2 py-1 border rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => incrementQty(item.id)}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right space-y-4">
        <h3 className="text-xl font-bold mb-4">
          Total: ${Number(total).toFixed(2)}
        </h3>
        <div className="flex flex-wrap justify-end gap-4">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>

          <Link to="/checkout">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
