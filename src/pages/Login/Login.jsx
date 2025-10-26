import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
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
        <div className="container bg-white p-5 rounded-4 shadow-sm">
          {/* Breadcrumb */}
          <div className="mb-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <NavLink to="/" className="text-decoration-none text-dark fw-semibold">
                    Home
                  </NavLink>
                </li>
                <li className="breadcrumb-item active fw-semibold" aria-current="page">
                  My Account
                </li>
              </ol>
            </nav>
          </div>

          <div className="row">
            {/* Left: Login Form */}
            <div className="col-md-6 border-end">
              <h2 className="fw-bold mb-4">Login</h2>

              <form>
                <div className="mb-3">
                  <label className="form-label fw-medium">
                    Username or email address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill p-3"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3 position-relative">
                  <label className="form-label fw-medium">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill p-3"
                    placeholder="Enter your password"
                  />
                  <i
                    className="bi bi-eye position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 rounded-pill py-2 fw-semibold"
                >
                  LOG IN
                </button>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>

                  <NavLink
                    to="/forgotpassword"
                    className="text-success text-decoration-none fw-medium"
                  >
                    Lost your password?
                  </NavLink>
                </div>
              </form>
            </div>

            {/* Right: Register Section */}
            <div className="col-md-6 text-center d-flex flex-column align-items-center">
              <h2 className="fw-bold mb-4">Register</h2>
              <p className="text-muted mb-4 px-4">
                Registering for this site allows you to access your order status and
                history. Just fill in the fields below, and we'll get a new account set
                up for you in no time. We only ask for information necessary to make the
                purchase process faster and easier.
              </p>
              <NavLink
                to="/signup"
                className="btn btn-success px-4 py-2 rounded-pill fw-semibold" style={{ width: "150px" }}
              >
                REGISTER
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
