// src/App.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import Shop from "./pages/Products/Products";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
import Signup from "./pages/Registration/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import FreshMilletFood from "./pages/FreshMilletFood/FreshMilletFood";
import WhatsAppCatalog from "./pages/WhatsAppCatalog/WhatsAppCatalog";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import MilletRecipe from "./pages/Home/MilletRecipe";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import BottomSheetCart from "./pages/Cart/BottomSheetCart";
import Alert from "./components/Alert/Alert";

// Example of lazy loading (optional)
const LazyAbout = lazy(() => import("./pages/AboutUs/About"));

export default function App() {

  return (
    <>
      <Navbar />
      <Alert />
      {/* All your routes here */}
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contactus" element={<ContactUs />} />

            {/* dynamic route */}
            {/* <Route path="/blog/:id" element={<Blogs />} /> */}

            {/* lazy route */}
            <Route path="/about" element={<LazyAbout />} />

            {/* protected route example */}
            {/* <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <div>Secure Dashboard content</div>
                </ProtectedRoute>
              }
            /> */}

            {/* auth routes */}
            {/* <Route path="/login" element={<Login />} /> */}

            {/* 404 fallback */}
            {/* <Route path="*" element={<NotFound />} /> */}

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/freshmilletfood" element={<FreshMilletFood />} />
            <Route path="/whatsappcatalog" element={<WhatsAppCatalog />} />
            <Route path="/blogDetail/:id" element={<BlogDetail />} />
            <Route path="/category/:categoryName" element={<MilletRecipe />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/cart/:id" element={<Cart />} /> */}
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/bottomsheetcart" element={<BottomSheetCart />} />


          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}