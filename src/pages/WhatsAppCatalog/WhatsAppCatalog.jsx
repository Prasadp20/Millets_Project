import React from "react";

const WhatsAppCatalog = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-white text-center my-5">
            <h5 className="mb-4 fw-normal">
                View <span className="fw-semibold">+91 92118 79842</span>'s catalog on WhatsApp
            </h5>

            <a
                href="https://wa.me/c/919211879842"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success rounded-pill px-5 py-2"
                style={{ fontWeight: "500", fontSize: "1rem" }}
            >
                Open
            </a>

            <hr className="w-50 my-4" />

            <p className="text-muted">
                Don’t have WhatsApp yet?{" "}
                <a
                    href="https://www.whatsapp.com/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-success text-decoration-none"
                >
                    Download
                </a>
            </p>
        </div>
    );
};

export default WhatsAppCatalog;
