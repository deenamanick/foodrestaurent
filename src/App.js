import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import OrderSuccess from "./pages/OrderSuccess";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";
import PaymentPage from "./pages/PaymentPage";
import CheckoutPage from "./pages/CheckoutPage";
import { UserProvider } from "./context/UserContext";
import OrderHistoryPage from "./pages/OrderHistoryPage";

function AppContent() {
  const location = useLocation(); // 👈 get current route

  const hideNavbarFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orderhistory" element={<OrderHistoryPage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
