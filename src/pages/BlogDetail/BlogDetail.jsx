import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BlogDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const { category, title, image, desc, date, index, blogs } = location.state || {};

    // Handle navigation
    const handleNavigate = (newIndex) => {
        const targetBlog = blogs[newIndex];
        if (targetBlog) {
            navigate(`/blogDetail/${newIndex}`, {
                state: { ...targetBlog, index: newIndex, blogs },
            });
        }
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
                    style={{ maxWidth: "700px", margin: "0 auto" }}
                >
                    <h1 className="fw-bold mb-3">Blog</h1>
                    <p>
                        Home / <strong>{category}</strong>
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container py-5" style={{ maxWidth: "900px" }}>
                {/* Category Badge */}
                {category && (
                    <div className="text-center mb-3">
                        <span className="badge bg-success px-3 py-2 fs-6 rounded-pill">
                            {category}
                        </span>
                    </div>
                )}

                {/* Blog Title */}
                <h2 className="fw-bold text-center mb-2">{title || "Blog Title"}</h2>

                {/* Author and Date */}
                <p className="text-center text-muted mb-4">
                    Posted by{" "}
                    <img
                        src="src/assets/user.png"
                        alt="User Icon"
                        style={{
                            width: "17px",
                            height: "17px",
                            margin: "0 6px",
                            verticalAlign: "middle",
                        }}
                    />
                    <strong>Millets for Health</strong>{" "}
                    {date && (
                        <>
                            {" "}
                            on <span className="text-body-secondary">{date}</span>
                        </>
                    )}
                </p>

                {/* Blog Image */}
                {image && (
                    <div className="text-center mb-4">
                        <img
                            src={image}
                            alt={title}
                            className="img-fluid rounded-4 shadow-sm"
                            style={{ maxWidth: "100%", borderRadius: "12px" }}
                        />
                    </div>
                )}

                {/* Blog Description */}
                {desc && (
                    <p className="text-muted lh-lg" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
                        {desc}
                    </p>
                )}

                {/* Next / Previous Navigation */}
                {blogs && blogs.length > 1 && (
                    <>
                        <hr className="mt-5" />
                        <div className="d-flex justify-content-between align-items-center py-3 flex-wrap">
                            {/* Newer (Previous) */}
                            <div className="d-flex align-items-center gap-3">
                                {index > 0 ? (
                                    <>
                                        <button
                                            className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
                                            style={{ width: "38px", height: "38px" }}
                                            onClick={() => handleNavigate(index - 1)}
                                        >
                                            <i className="bi bi-chevron-left"></i>
                                        </button>
                                        <div>
                                            <p className="mb-1 text-muted small">Newer</p>
                                            <h6 className="fw-semibold mb-0 text-dark text-wrap">
                                                {blogs[index - 1].title}
                                            </h6>
                                        </div>
                                    </>
                                ) : (
                                    <div></div>
                                )}
                            </div>

                            {/* Center Icon */}
                            <div className="text-muted">
                                <i className="bi bi-grid fs-5"></i>
                            </div>

                            {/* Older (Next) */}
                            <div className="d-flex align-items-center gap-3 text-end">
                                {index < blogs.length - 1 ? (
                                    <>
                                        <div>
                                            <p className="mb-1 text-muted small">Older</p>
                                            <h6 className="fw-semibold mb-0 text-dark text-wrap">
                                                {blogs[index + 1].title}
                                            </h6>
                                        </div>
                                        <button
                                            className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
                                            style={{ width: "38px", height: "38px" }}
                                            onClick={() => handleNavigate(index + 1)}
                                        >
                                            <i className="bi bi-chevron-right"></i>
                                        </button>
                                    </>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                        <hr className="mb-5" />
                    </>
                )}
            </div>
        </>
    );
}
