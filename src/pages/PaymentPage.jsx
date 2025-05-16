import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const { total, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Simulate payment
    setTimeout(() => {
      clearCart();
      navigate('/payment-success');
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Payment Details</h2>
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name on Card</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border rounded"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            required
            maxLength="16"
            className="w-full p-2 border rounded"
            value={form.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium">Expiry Date</label>
            <input
              type="text"
              name="expiry"
              required
              placeholder="MM/YY"
              className="w-full p-2 border rounded"
              value={form.expiry}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium">CVV</label>
            <input
              type="password"
              name="cvv"
              required
              maxLength="4"
              className="w-full p-2 border rounded"
              value={form.cvv}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
           Pay ${Number(total).toFixed(2)}
          </button>
        </div>
      </form>
    </div>
  );
}
