import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '', // Added mobile field
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        // Reset the form fields after successful signup
        setForm({
          name: '',
          email: '',
          password: '',
          mobile: '', // Reset mobile field
        });

        // Redirect to login page after successful signup
        navigate('/login');
      } else {
        alert(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded"
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* New mobile number input */}
          <div>
            <label className="block mb-1 text-sm">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              className="w-full px-4 py-2 border rounded"
              placeholder="Your mobile number"
              value={form.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-red-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
