import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
    const navigate = useNavigate();
    const { showAlert } = useContext(AlertContext);

    const [name, setName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://localhost:7000/api/Users/CreateUsers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    emailId,
                    password,
                    mobileNo: "string",
                    subject: "string",
                    message: "string",
                    userId: emailId,
                    createdAt: Date.now,
                    createdBy: 0,
                    isDeleted: false
                })
            });

            if (!response.ok) {
                showAlert("Registration failed!", "danger");
                return;
            }

            const data = await response.json();

            if (data) {
                showAlert("Registration successful!", "success");
                navigate("/login");
            } else {
                showAlert("User already exists!", "danger");
            }

        } catch (error) {
            showAlert("Something went wrong!", "danger");
        }
    };

    return (
        <>
            {/* Bootstrap Alert */}
            {alert.msg && (
                <div
                    className={`alert alert-${alert.type} alert-dismissible fade show text-center m-0`}
                    role="alert"
                >
                    {alert.msg}
                </div>
            )}

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

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label fw-semibold">
                                        Username <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-pill"
                                        placeholder="Enter username"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">
                                        Email address <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control rounded-pill"
                                        placeholder="Enter your email"
                                        required
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 position-relative">
                                    <label htmlFor="password" className="form-label fw-semibold">
                                        Password <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control rounded-pill"
                                        placeholder="Enter your password"
                                        required
                                        minLength={5}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-success w-100 rounded-pill fw-semibold"
                                >
                                    REGISTER
                                </button>
                            </form>
                        </div>

                        {/* Login Column */}
                        <div className="col-md-6 text-center d-flex flex-column align-items-center">
                            <h3 className="fw-bold mb-3">Login</h3>
                            <p className="text-muted px-3">
                                Registering for this site allows you to access your order status and history.
                                Just fill in the fields below, and we’ll get a new account set up for you in no time.
                            </p>

                            <button
                                onClick={() => navigate("/login")}
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
