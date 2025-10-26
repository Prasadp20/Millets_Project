import React from "react";

export default function AboutUsSection() {
    return (
        <section className="py-5 bg-white my-5">
            <div className="container py-4">
                <div className="row align-items-center mb-5">
                    {/* --- Left Text Content --- */}
                    <div className="col-lg-7">
                        <p className="text-uppercase text-warning fw-bold mb-2">
                            About Us
                        </p>
                        <h1 className="fw-bold mb-4 lh-sm">
                            Millets for Health – Reviving Ancient <br /> Grains for Modern
                            Wellness
                        </h1>
                        <p className="text-muted mb-4">
                            Millets for Health is born out of a journey of personal health and
                            transformation and has grown into a social enterprise working on
                            the revival of millets, the ancient Indian Super Foods.{" "}
                            <a
                                href="#"
                                className="fw-semibold text-decoration-none text-primary"
                            >
                                Read More
                            </a>
                        </p>

                        {/* --- Features Grid --- */}
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body d-flex align-items-start">
                                        <div
                                            className="rounded-circle bg-light text-success d-flex justify-content-center align-items-center me-3"
                                            style={{ width: "45px", height: "45px" }}
                                        >
                                            <i className="bi bi-leaf fs-5"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Farm Fresh</h6>
                                            <p className="text-muted small mb-0">
                                                Sourced directly from trusted farmers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body d-flex align-items-start">
                                        <div
                                            className="rounded-circle bg-light text-success d-flex justify-content-center align-items-center me-3"
                                            style={{ width: "45px", height: "45px" }}
                                        >
                                            <i className="bi bi-check-circle fs-5"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Pure Quality</h6>
                                            <p className="text-muted small mb-0">
                                                No additives, only natural ingredients.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body d-flex align-items-start">
                                        <div
                                            className="rounded-circle bg-light text-success d-flex justify-content-center align-items-center me-3"
                                            style={{ width: "45px", height: "45px" }}
                                        >
                                            <i className="bi bi-truck fs-5"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Local Delivery</h6>
                                            <p className="text-muted small mb-0">
                                                Fresh products delivered same-day.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body d-flex align-items-start">
                                        <div
                                            className="rounded-circle bg-light text-success d-flex justify-content-center align-items-center me-3"
                                            style={{ width: "45px", height: "45px" }}
                                        >
                                            <i className="bi bi-heart-pulse fs-5"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Health Focused</h6>
                                            <p className="text-muted small mb-0">
                                                Wholesome millets for daily wellness.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Image --- */}
                    <div className="col-lg-5 mt-5 mt-lg-0 text-center">
                        <img
                            src='https://nisargnutritions.com/cdn/shop/articles/International_Millet_Day_Know_All_About_Different_Millets_in_India1.jpg?v=1680110509&width=900'
                            alt="Millets and Wooden Spoons"
                            className="img-fluid rounded-4 shadow-sm"
                            style={{ height: "400px", width: "100%", objectFit: "cover" }}
                        />
                    </div>
                </div>

                {/* --- Statistics Section --- */}
                <div className="row text-center pt-5 border-top mt-4">
                    <div className="col-md-3 col-6 mb-4">
                        <h2 className="fw-bold text-warning mb-1">9876+</h2>
                        <p className="text-muted small mb-0">Farmers Benefited</p>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                        <h2 className="fw-bold text-warning mb-1">10000+</h2>
                        <p className="text-muted small mb-0">Happy Customers</p>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                        <h2 className="fw-bold text-warning mb-1">100+</h2>
                        <p className="text-muted small mb-0">Millet Workshops</p>
                    </div>
                    <div className="col-md-3 col-6 mb-4">
                        <h2 className="fw-bold text-warning mb-1">9876+</h2>
                        <p className="text-muted small mb-0">Workshop Alumni</p>
                    </div>
                </div>
            </div>

            {/* --- Floating WhatsApp Icon --- */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="position-fixed bottom-0 end-0 m-4 bg-success text-white rounded-circle shadow-lg d-flex justify-content-center align-items-center"
                style={{ width: "55px", height: "55px", zIndex: 1000 }}
            >
                <i className="bi bi-whatsapp fs-3"></i>
            </a>
        </section>
    );
}
