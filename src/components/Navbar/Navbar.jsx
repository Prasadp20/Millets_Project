import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-white py-3">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src=""
                            alt="Millets for Health"
                            height="100"
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

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav me-6">
                            <li className="nav-item"><NavLink className="nav-link mx-2" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link mx-2" to="/about">About Us</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link mx-2" to="/shop">Products</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link mx-2" to="/blogs">Blogs</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link mx-2" to="/contactus">Contact Us</NavLink></li>
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
        </>
    );
}