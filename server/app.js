const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// User model (inline instead of separate file)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },  // Add this line for mobile number
});
const User = mongoose.model("User", userSchema);

// Order schema
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User model
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  total: { type: Number, required: true },
  items: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.model("Order", orderSchema);

// Signup route
const bcrypt = require("bcrypt");

app.post("/api/signup", async (req, res) => {
  const { name, email, password, mobile } = req.body; // Include mobile in the destructuring

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Hash the password
    const saltRounds = 10; // You can adjust salt rounds (10 is a good balance)
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Include the mobile number when creating the new user
    const newUser = new User({ name, email, password: hashedPassword, mobile });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Send the user's name and other necessary details after login
    res.status(200).json({
      success: true,
      message: "Login successful",
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


// Order API Route
app.post("/api/orders", async (req, res) => {
  const { name, phone, address, total, items, createdAt, userEmail } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email: userEmail });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create the order, referencing the user's ObjectId
    const newOrder = new Order({
      name,
      phone,
      address,
      total,
      items,
      createdAt,
      user: user._id, // Store the user's ObjectId
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get Orders by User Email (populate user information and return order details)
app.get("/api/orders/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const orders = await Order.find({ user: user._id }).populate("user", "name email").exec();
    res.json(orders); // Always return array (even empty)
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
