import React from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <>
            {/* Top Banner Section */}
            <div
                className="container-fluid d-flex justify-content-center align-items-center text-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://prakati.in/wp-content/uploads/2023/04/millets2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    height: "30vh",
                    color: "white",
                }}
            >
                <div
                    className="p-5 rounded-4 w-100"
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                    }}
                >
                    <h1 className="fw-bold mb-3">My Account</h1>
                    <p>Home / My Account</p>
                </div>
            </div>

            <div className="container-fluid py-5" style={{ backgroundColor: "#f7f7f7" }}>
                <div className="container bg-white p-5 rounded-4 shadow-sm d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "50vh" }}>

                    {/* Breadcrumb */}
                    <div className="w-100 mb-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <NavLink to="/" className="text-decoration-none text-dark fw-semibold">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="breadcrumb-item">
                                    <NavLink to="/login" className="text-decoration-none text-dark fw-semibold">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">
                                    My Account
                                </li>
                            </ol>
                        </nav>
                    </div>

                    {/* Forgot Password Form */}
                    <div className="col-md-6 text-center">
                        <h2 className="fw-bold mb-4">Forgot Password</h2>
                        <p className="text-start">
                            Lost your password? Please enter your username or email address.
                            You will receive a link to create a new password via email.
                        </p>

                        <form>
                            <div className="mb-3 text-start">
                                <label className="form-label fw-medium">
                                    Username or email address <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control rounded-pill p-3"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <button type="submit" className="btn btn-success w-100 rounded-pill py-2 fw-semibold">
                                RESET PASSWORD
                            </button>
                        </form>
                    </div>

                </div>
            </div>


        </>
    );
}
