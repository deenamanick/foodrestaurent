import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser } = useUser(); // Get setUser from context
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        // Set user in the context with both name and email
        setUser({ name: data.name, email: data.email }); // Set user context with the name and email
        localStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email }));
        alert("Login successful!");
        navigate("/"); // Redirect after successful login
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
