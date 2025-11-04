import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MilletRecipe() {
    const location = useLocation();
    const navigate = useNavigate();

    // Destructure safely
    const { name, image, recipe, categories, index = 0, title } = location.state || {};

    // Handle navigation for Next / Previous
    const handleNavigate = (newIndex) => {
        const targetCategory = categories[newIndex];
        if (targetCategory) {
            navigate(`/category/${newIndex}`, {
                state: { ...targetCategory, index: newIndex, categories },
            });
        }
    };

    return (
        <>
            {/* ========================= Top Banner Section ========================== */}
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
                    <h1 className="fw-bold mb-3 display-6">
                        {title || "Delicious Millet Recipe"}
                    </h1>
                    <p className="text-light small">
                        Home / <strong>{name || "Recipes"}</strong>
                    </p>
                </div>
            </div>

            {/* ========================= Main Content Section ========================== */}
            <div className="container py-5" style={{ maxWidth: "900px" }}>
                {/* Blog Title */}
                <h2 className="fw-bold text-center mb-4">{name || "Recipe Title"}</h2>

                {/* Blog Image */}
                {image && (
                    <div className="text-center mb-5">
                        <img
                            src={image}
                            alt={name}
                            className="img-fluid rounded-4 shadow-sm"
                            style={{
                                maxWidth: "50%",
                                borderRadius: "12px",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                )}

                {/* ========================= Millet Recipe Section ========================== */}
                {recipe && (
                    <div className="mt-2">
                        {/* Ingredients Section */}
                        {recipe.ingredients && (
                            <div className="mb-5">
                                <h4 className="fw-semibold mb-3 text-success">
                                    🥣 Ingredients You Need:
                                </h4>
                                <ul className="list-unstyled ms-3">
                                    {recipe.ingredients.map((item, i) => (
                                        <li key={i} className="mb-2">
                                            <i className="bi bi-check-circle text-success me-2"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Steps Section */}
                        {recipe.steps && (
                            <div>
                                <h4 className="fw-semibold mb-3 text-success">
                                    👨‍🍳 Step-by-Step Recipe:
                                </h4>
                                {recipe.steps.map((step, idx) => (
                                    <div key={idx} className="mb-4">
                                        <h5 className="fw-bold text-dark mb-2">
                                            {step.stepTitle}
                                        </h5>
                                        <ol className="ms-4">
                                            {step.instructions.map((line, j) => (
                                                <li key={j} className="mb-1 text-muted">
                                                    {line}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* ========================= Navigation Buttons ========================== */}
                {categories && categories.length > 1 && (
                    <>
                        <hr className="mt-5" />
                        <div className="d-flex justify-content-between align-items-center py-3 flex-wrap">
                            {/* Newer (Previous) */}
                            <div className="d-flex align-items-center gap-3">
                                {index > 0 ? (
                                    <>
                                        <button
                                            className="btn btn-outline-success rounded-circle p-2 d-flex align-items-center justify-content-center"
                                            style={{ width: "40px", height: "40px" }}
                                            onClick={() => handleNavigate(index - 1)}
                                        >
                                            <i className="bi bi-chevron-left"></i>
                                        </button>
                                        <div>
                                            <p className="mb-1 text-muted small">Newer</p>
                                            <h6 className="fw-semibold mb-0 text-dark text-wrap">
                                                {categories[index - 1].name}
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
                                {index < categories.length - 1 ? (
                                    <>
                                        <div>
                                            <p className="mb-1 text-muted small">Older</p>
                                            <h6 className="fw-semibold mb-0 text-dark text-wrap">
                                                {categories[index + 1].name}
                                            </h6>
                                        </div>
                                        <button
                                            className="btn btn-outline-success rounded-circle p-2 d-flex align-items-center justify-content-center"
                                            style={{ width: "40px", height: "40px" }}
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
