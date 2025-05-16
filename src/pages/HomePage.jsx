import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 px-6 py-16 flex flex-col items-center pt-24">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mb-20">
        <h2 className="text-5xl font-extrabold text-red-600 mb-4">
          Welcome to <span className="text-yellow-500">RestoShop</span>!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Delicious meals, delivered to your door. Fresh ingredients, bold
          flavors — all just a click away.
        </p>
        
        <Link to="/menu" >
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105">
          Browse Menu
        </button>
        </Link>
      </div>

      {/* Featured Dishes */}
      <section className="w-full max-w-5xl mb-20">
        <div className="w-full max-w-5xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Dishes
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Spicy Chicken Wings",
                image:
                  "https://www.allrecipes.com/thmb/Wxed5-yelkf-JmTp0yqos6BzIq8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8768-ddmfs-sweet-spicy-wings-3X4-0076-b484a1db3199469385a540db0339f773.jpg",
                desc: "Crispy and coated in our signature spicy sauce.",
              },
              {
                name: "Veggie Delight Pizza",
                image:
                  "https://zustel.com/assets/img/items/1650461901Nn7jY11TCu.jpg",
                desc: "Loaded with fresh vegetables and cheese.",
              },
              {
                name: "Cheesy Burger",
                image:
                  "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/cheesy-beef-burger-truffle-mayo-9a32fcdd.jpg",
                desc: "Juicy beef patty with layers of cheese and toppings.",
              },
            ].map((dish, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {dish.name}
                </h4>
                <p className="text-gray-600 text-sm">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-4xl mb-20 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          About RestoShop
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          At RestoShop, we’re passionate about great food. We partner with top
          chefs and local restaurants to bring gourmet meals straight to your
          home. Quality, convenience, and flavor — that’s our promise.
        </p>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-5xl mb-20">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
          How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              step: "1",
              title: "Browse Menu",
              icon: "🍽️",
              desc: "Choose from our wide variety of meals.",
            },
            {
              step: "2",
              title: "Place Order",
              icon: "🛒",
              desc: "Add your favorites to the cart and checkout.",
            },
            {
              step: "3",
              title: "Enjoy Food",
              icon: "🚚",
              desc: "Delivered fresh and hot to your door.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl text-center mb-20">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Customers Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Amit",
              quote: "The pizza was amazing and delivery was quick!",
            },
            { name: "Sara", quote: "Loved the spicy wings! Will order again!" },
            { name: "John", quote: "Great service and fresh food every time." },
          ].map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic text-gray-600">“{review.quote}”</p>
              <p className="mt-4 font-semibold text-red-500">– {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-5xl mb-20 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">
          Our Specialties
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌶️",
              title: "Bold Flavors",
              desc: "We use authentic spices and fresh herbs to create unforgettable meals.",
            },
            {
              icon: "🥗",
              title: "Fresh Ingredients",
              desc: "All our dishes are made using only the freshest local produce.",
            },
            {
              icon: "👨‍🍳",
              title: "Expert Chefs",
              desc: "Our chefs are passionate culinary artists with years of experience.",
            },
          ].map((spec, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{spec.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{spec.title}</h4>
              <p className="text-gray-600 text-sm">{spec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Our App */}
      <section className="w-full max-w-4xl mb-20 text-center bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Get Our App</h3>
        <p className="text-lg text-gray-600 mb-6">
          Order on the go with our mobile app. Track orders, save your
          favorites, and receive exclusive deals.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-5 py-3 rounded-lg font-medium flex items-center gap-2">
            📱 App Store
          </button>
          <button className="bg-green-600 text-white px-5 py-3 rounded-lg font-medium flex items-center gap-2">
            🤖 Google Play
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full max-w-2xl mb-20 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h3>
        <p className="text-gray-700 mb-4">
          Subscribe to our newsletter and never miss a tasty update.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full border border-gray-300 w-full sm:w-2/3"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
