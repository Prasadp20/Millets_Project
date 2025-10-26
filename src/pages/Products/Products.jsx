import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Products() {
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
                    <h1 className="fw-bold mb-3">Shop</h1>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    {/* ===== Left Sidebar ===== */}
                    <div className="col-lg-3 col-md-4 mb-4">
                        <div className="p-3 border rounded-4 shadow-sm bg-white">
                            <h5 className="fw-bold mb-3">Categories</h5>
                            <ul className="list-unstyled">
                                {[
                                    "Millet Food",
                                    "Daily Fresh",
                                    "Gift Hamper",
                                    "Noodles, Pasta & Vermicelli",
                                    "New Arrivals",
                                    "Fresh Products",
                                    "Discounts",
                                    "Unpolished Millets",
                                    "Millet Snacks/Ready to Eat Products",
                                    "Unpolished Millet Flours",
                                    "Cold Pressed Oils",
                                    "Millets Daliya",
                                    "Millet Combo Packs",
                                    "Millet Pre Mixes",
                                    "Millet Rava/Sooji",
                                    "Sprouted Millet Flours",
                                    "Millet Poha/Flakes",
                                ].map((cat, index) => (
                                    <li
                                        key={index}
                                        className="d-flex justify-content-between align-items-center py-1 border-bottom small text-muted"
                                    >
                                        <span>{cat}</span>
                                        <span className="badge bg-light text-dark">0</span>
                                    </li>
                                ))}
                            </ul>

                            <hr className="my-4" />

                            <h6 className="fw-semibold mb-3">Filter by price</h6>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="500"
                                step="10"
                            />
                        </div>
                    </div>

                    {/* ===== Right Product Section ===== */}
                    <div className="col-lg-9 col-md-8">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="#" className="text-decoration-none text-success">
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Shop
                                    </li>
                                </ol>
                            </nav>

                            <div className="d-flex align-items-center">
                                <span className="me-3 text-muted small">
                                    Show : <a href="#">12</a> / <a href="#">24</a> / <a href="#">36</a> /{" "}
                                    <a href="#">All</a>
                                </span>
                                <select className="form-select form-select-sm" style={{ width: "150px" }}>
                                    <option>Default sorting</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>

                        {/* ===== Product Grid ===== */}
                        <div className="row g-4">
                            {[
                                {
                                    name: "Amaranth Flour",
                                    price: "₹150.00",
                                    img: "https://milletsforhealth.com/wp-content/uploads/2025/10/Amaranth-1.jpg",
                                },
                                {
                                    name: "Bajra (Pearl Millet) Daliya",
                                    price: "₹100.00",
                                    img: "https://milletsforhealth.com/wp-content/uploads/2025/07/Artboard-17-1.png",
                                },
                                {
                                    name: "Bajra Flour",
                                    price: "₹90.00",
                                    img: "https://milletsforhealth.com/wp-content/uploads/2025/10/Bajra-Pearl-Millet-Flour.jpg",
                                },
                                {
                                    name: "Bajra Poha",
                                    price: "₹100.00",
                                    img: "https://milletsforhealth.com/wp-content/uploads/2025/10/Bajra-Poha.jpg",
                                },
                                {
                                    name: "Barnyard Millet Flour",
                                    price: "₹140.00",
                                    oldPrice: "₹150.00",
                                    discount: "-7%",
                                    img: "https://milletsforhealth.com/wp-content/uploads/2025/07/Barnyard-flour.jpg",
                                },
                                {
                                    name: "Barnyard Millet Rice",
                                    price: "₹130.00",
                                    oldPrice: "₹145.00",
                                    discount: "-10%",
                                    img: "https://milletsforhealth.com/wp-content/uploads/2025/10/Barnayard-Rice.jpg",
                                },
                            ].map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="card border-0 shadow-sm h-100 position-relative">
                                        {item.discount && (
                                            <span
                                                className="badge bg-success position-absolute"
                                                style={{ top: "10px", left: "10px" }}
                                            >
                                                {item.discount}
                                            </span>
                                        )}
                                        <img
                                            src={item.img}
                                            className="card-img-top"
                                            alt={item.name}
                                            style={{
                                                height: "300px",
                                                objectFit: "cover",
                                                borderTopLeftRadius: "10px",
                                                borderTopRightRadius: "10px",
                                            }}
                                        />
                                        <div className="card-body text-center">
                                            <h6 className="card-title fw-semibold">{item.name}</h6>
                                            <p className="card-text mb-0">
                                                {item.oldPrice && (
                                                    <span className="text-decoration-line-through text-muted me-2">
                                                        {item.oldPrice}
                                                    </span>
                                                )}
                                                <span className="text-success fw-semibold">{item.price}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
