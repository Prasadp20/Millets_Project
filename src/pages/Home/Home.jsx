import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import MilletCategories from "./MilletCategories"; // ✅ Import the component
import OrderMillet from "./OrderMillet";
import FreshProduct_Discount from "./FreshProduct_Discount";
import AboutUs from "./AboutUs";
import TestimonialSection from "./Testimonials";
import BlogEvents from "./BlogEvents";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="text-white"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://images.pexels.com/photos/9974505/pexels-photo-9974505.jpeg?_gl=1*nt6ygt*_ga*MTExMjU0Njg2OC4xNzYxMzM5MjI2*_ga_8JE65Q40S6*czE3NjEzMzkyMjUkbzEkZzEkdDE3NjEzMzk2NTIkajU5JGwwJGgw')",                        
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh",
                    position: "relative",
                }}
            >
                <div className="container d-flex flex-column justify-content-center align-items-start h-100 ps-5">
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
        </div>
    );
}
