import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-red-50 via-white to-yellow-50  py-5 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h4 className="text-2xl font-bold text-yellow-400 mb-2">RestoShop</h4>
          <p className="text-sm">
            Serving delicious meals from your favorite local restaurants. Fast,
            fresh, and always flavorful.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-400">
                Menu
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Contact</h5>
          <p className="text-sm">📞 +1 (234) 567-8901</p>
          <p className="text-sm">✉️ support@restoshop.com</p>
          <p className="text-sm">🏠 123 Flavor St, Food City</p>
        </div>

        {/* Social Icons */}
        <div>
          <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
          <div className="flex space-x-4 text-2xl">
            <a href="/" className="hover:text-yellow-400">
              📘
            </a>
            <a href="/" className="hover:text-yellow-400">
              🐦
            </a>
            <a href="/" className="hover:text-yellow-400">
              📸
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 text-gray-400">
        &copy; {new Date().getFullYear()} RestoShop. All rights reserved.
      </div>
    </footer>
  );
}
