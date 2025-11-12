import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import viewLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/view.png";
import hideLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/hide.png";

export default function LoginBottomSheet() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    // Function to close Bootstrap offcanvas programmatically
    const closeOffcanvas = () => {
        const offcanvasElement = document.getElementById("loginSheet");
        const offcanvasInstance = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvasInstance) {
            offcanvasInstance.hide();
        }
    };

    const handleNavigateToSignup = () => {
        closeOffcanvas();
        navigate("/signup");
    };

    const handleNavigateToForgotPassword = () => {
        closeOffcanvas();
        navigate("/forgotpassword");
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="loginSheet"
            aria-labelledby="loginSheetLabel"
            style={{ width: "370px" }}
        >
            <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title fw-bold" id="loginSheetLabel">
                    Sign in
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>

            <div className="offcanvas-body py-4">
                <form className="d-flex flex-column gap-4">
                    {/* Username/Email */}
                    <div>
                        <label className="form-label fw-semibold">
                            Username or email address <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-pill py-2"
                            placeholder="Enter username or email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="position-relative">
                        <label className="form-label fw-semibold">
                            Password <span className="text-danger">*</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="form-control rounded-pill py-2 pe-5"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="position-absolute top-50 end-0 border-0 bg-transparent pe-3"
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={showPassword ? hideLogo : viewLogo}
                                alt={showPassword ? "Hide password" : "Show password"}
                                style={{ width: "20px" }}
                            />
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn btn-success w-100 rounded-pill fw-semibold py-2"
                    >
                        LOG IN
                    </button>

                    {/* Remember Me & Lost Password */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="rememberMe"
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember me
                            </label>
                        </div>

                        <button
                            type="button"
                            onClick={handleNavigateToForgotPassword}
                            className="btn btn-link text-success text-decoration-none small p-0"
                        >
                            Lost your password?
                        </button>
                    </div>

                    <hr className="my-3" />

                    {/* Create Account Section */}
                    <div className="text-center">
                        <div className="text-muted mb-2">No account yet?</div>
                        <button
                            type="button"
                            onClick={handleNavigateToSignup}
                            className="btn btn-link text-success text-decoration-none fw-semibold p-0"
                        >
                            CREATE AN ACCOUNT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
