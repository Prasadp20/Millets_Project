import React from "react";
import MilletCategories from "./MilletCategories"; // ✅ Import the component
import OrderMillet from "./OrderMillet";
import FreshProduct_Discount from "./FreshProduct_Discount";
import AboutUs from "./AboutUs";
import TestimonialSection from "./Testimonials";
import BlogEvents from "./BlogEvents";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <div>
            {/* Top Green Bar */}
            {/* <div className="bg-success text-white text-center py-1 small">
                🌾 Seasonal Specials Now Live! 🛒 Order Today, Eat Fresh! 🚚 Pure & Natural 🌱 Direct from Farm to You
            </div> */}

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://milletsforhealth.in/wp-content/uploads/2021/08/mfh_logo-1.png"
                            alt="Millets for Health"
                            height="10"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav me-6">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>

                        <form className="d-flex mx-3" role="search">
                            <input
                                className="form-control me-4"
                                type="search"
                                placeholder="Search for products"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div
                className="text-white"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/9974505/pexels-photo-9974505.jpeg?_gl=1*nt6ygt*_ga*MTExMjU0Njg2OC4xNzYxMzM5MjI2*_ga_8JE65Q40S6*czE3NjEzMzkyMjUkbzEkZzEkdDE3NjEzMzk2NTIkajU5JGwwJGgw')",                        
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh",
                    position: "relative",
                }}
            >
                <div
                    className="d-flex flex-column justify-content-center align-items-start h-100 ps-5"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                    <h5 className="text-warning mb-2">Natural Millet</h5>
                    <h1 className="fw-bold">Healthy Living Starts with</h1>
                    <h1 className="fw-bold mb-4">Unpolished Millets</h1>
                    <p className="fs-5 w-50">
                        Unpolished millets retain their natural bran, offering more fiber,
                        nutrients, and flavor – making them a healthier, wholegrain food
                        choice.
                    </p>
                    <button className="btn btn-success btn-lg px-4">Explore All</button>
                </div>
            </div>

            {/* --- Millet Categories Section --- */}
            <MilletCategories /> {/* ✅ Calling the component here */}

            {/* To order freshly cooked millet food */}
            <OrderMillet/>

            <FreshProduct_Discount/>

            {/* About Us */}
            <AboutUs/>

            {/* TestimonialSection */}
            <TestimonialSection/>

            {/* Blog & Events */}
            <BlogEvents/>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
