import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login"); // navigate to login page
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    {/* Brand Logo */}
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src=""
                            alt="Millets for Health"
                            height="80"
                        />
                    </NavLink>

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

                    {/* Navbar Items */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="d-flex align-items-center justify-content-end w-100 gap-4">
                            {/* Navigation Links */}
                            <ul className="navbar-nav d-flex align-items-center mb-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/shop">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/blogs">Blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/contactus">Contact Us</NavLink>
                                </li>
                            </ul>

                            {/* Search Box */}
                            <form className="d-flex align-items-center" role="search" style={{ minWidth: "250px" }}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search for products"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>

                            {/* User Icon */}
                            <img
                                src="src/assets/user2.png"
                                alt="User Logo"
                                style={{ width: "24px", cursor: "pointer" }}
                                onClick={handleLoginClick}
                                title="Go to Login"
                            />

                            {/* Shopping Cart Icon */}
                            <img
                                src="src/assets/shopping-cart.png"
                                alt="Shopping Cart Logo"
                                style={{ width: "24px", cursor: "pointer" }}
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
