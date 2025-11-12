import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import productImage from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/Gemini_Generated_Image_d8xv2dd8xv2dd8xv.png"; // <-- use your image path

export default function Cart() {
    const navigate = useNavigate();
    const location = useLocation();   // <-- ADD THIS LINE
    const { id, name, price, img, index } = location.state || {};  // <-- NOW THIS WORKS

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () =>
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    // const price = 150;
    const subtotal = { price } * quantity;
    const deliveryFee = 80;
    const total = subtotal + deliveryFee;

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

                    <div className="gap-4">

                        {/* ACTIVE STEP */}
                        <span className="fw-bold text-white border-bottom border-3 border-success pb-1 fs-4">
                            SHOPPING CART
                        </span>

                        <span className="text-secondary fs-3">→</span>

                        {/* INACTIVE STEPS */}
                        <span className="fw-semibold text-secondary fs-4">CHECKOUT</span>

                        <span className="text-secondary fs-3">→</span>

                        <span className="fw-semibold text-secondary fs-4">ORDER COMPLETE</span>

                    </div>



                </div>
            </div>

            <div className="container bg-white p-5 rounded-4 shadow-sm my-5">

                {/* Breadcrumb */}
                <div className="mb-4">
                    <nav aria-label="breadcrumb text-dark">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                            <li className="breadcrumb-item active">Cart</li>
                        </ol>
                    </nav>
                </div>

                {/* Added to cart message */}
                <div className="alert alert-success d-flex justify-content-between align-items-center">
                    <span>"{name}" has been added to your cart.</span>
                    <NavLink to="/shop" className="text-success-emphasis fw-semibold">CONTINUE SHOPPING</NavLink>
                </div>

                <div className="row">
                    {/* LEFT BOX - PRODUCT LIST */}
                    <div className="col-md-8">

                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>SUBTOTAL</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src={img} alt="Product"
                                                style={{ width: "70px", height: "70px", objectFit: "contain" }}
                                                className="rounded-3 me-3"
                                            />
                                            <span className="fw-semibold">{name}</span>
                                        </div>
                                    </td>

                                    <td>₹{price}.00</td>

                                    <td>
                                        <div
                                            className="d-flex align-items-center border rounded px-2 py-1"
                                            style={{ width: "90px" }}
                                        >
                                            <button className="btn btn-sm" onClick={handleDecrease}>−</button>
                                            <span className="mx-auto fw-semibold">{quantity}</span>
                                            <button className="btn btn-sm" onClick={handleIncrease}>+</button>
                                        </div>
                                    </td>

                                    <td className="text-success fw-bold">
                                        ₹{(parseFloat(price.replace("₹", "")) * quantity).toFixed(2)}
                                    </td>


                                </tr>
                            </tbody>
                        </table>

                        {/* Coupon Section */}
                        <div className="d-flex gap-3 mt-4">
                            <input type="text"
                                placeholder="Coupon code"
                                className="form-control rounded-pill px-3"
                            />
                            <button className="btn btn-success rounded-pill px-4">APPLY COUPON</button>
                        </div>
                    </div>

                    {/* RIGHT BOX - CART TOTAL */}
                    <div className="col-md-4">
                        <div className="card p-4 rounded-4 shadow-sm">
                            <h5 className="fw-bold mb-3">CART TOTALS</h5>

                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal</span>
                                <span>₹{(parseFloat(price.replace("₹", "")) * quantity).toFixed(2)}</span>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                                <span>Shipping</span>
                                <span className="fw-semibold text-success">Delivery Fee: ₹{deliveryFee}.00</span>
                            </div>

                            <span className="text-primary small mb-3">Shipping to Uttar Pradesh.</span>
                            <a href="#" className="small text-success fw-semibold text-decoration-none">Change address</a>

                            <hr />

                            <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                                <span>Total</span>
                                <span className="text-success">₹{(parseFloat(price.replace("₹", "")) * quantity).toFixed(2)}</span>
                            </div>

                            <button className="btn btn-success rounded-pill w-100 py-2 fw-semibold">
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}