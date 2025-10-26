import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

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
            <div className="bg-light py-5">
                <div className="container bg-white shadow-sm p-5 rounded-4">
                    {/* Breadcrumb */}
                    <div className="mb-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/" className="text-decoration-none text-dark fw-semibold">
                                        Home
                                    </a>
                                </li>
                                <li className="breadcrumb-item active fw-semibold" aria-current="page">
                                    My Account
                                </li>
                            </ol>
                        </nav>
                    </div>

                    {/* Register + Login Section */}
                    <div className="row mt-4">
                        {/* Register Column */}
                        <div className="col-md-6 border-end">
                            <h3 className="fw-bold mb-4">Register</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label fw-semibold">
                                        Username <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-pill"
                                        id="username"
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">
                                        Email address <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control rounded-pill"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-3 position-relative">
                                    <label htmlFor="password" className="form-label fw-semibold">
                                        Password <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control rounded-pill"
                                        id="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <span
                                        className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <i className="bi bi-eye"></i>
                                    </span>
                                </div>

                                <p className="text-muted small mt-3">
                                    Your personal data will be used to support your experience throughout this website,
                                    to manage access to your account, and for other purposes described in our{" "}
                                    <a href="#" className="text-decoration-none text-success fw-semibold">
                                        privacy policy
                                    </a>.
                                </p>

                                <button type="submit" className="btn btn-success w-100 rounded-pill fw-semibold">REGISTER</button>
                            </form>
                        </div>

                        {/* Login Column */}
                        <div className="col-md-6 text-center d-flex flex-column align-items-center">
                            <h3 className="fw-bold mb-3">Login</h3>
                            <p className="text-muted px-3 text-center">
                                Registering for this site allows you to access your order status and history.
                                Just fill in the fields below, and we’ll get a new account set up for you in no time.
                                We will only ask you for information necessary to make the purchase process faster and easier.
                            </p>
                            <button
                                onClick={handleLoginClick}
                                className="btn btn-success rounded-pill fw-semibold mt-2 px-4"
                                style={{ width: "150px" }}
                            >
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
