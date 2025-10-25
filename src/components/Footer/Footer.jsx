import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-start">
          {/* ===== About Section ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-success">Millets For Health</h5>
            <p className="small">
              Promoting a healthier lifestyle with unpolished, natural millets.
              Pure, nutritious, and sustainably sourced from local farmers.
            </p>
          </div>

          {/* ===== Quick Links ===== */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3 text-success">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none small">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none small">About Us</a></li>
              <li><a href="/products" className="text-light text-decoration-none small">Products</a></li>
              <li><a href="/blog" className="text-light text-decoration-none small">Blog</a></li>
              <li><a href="/contact" className="text-light text-decoration-none small">Contact</a></li>
            </ul>
          </div>

          {/* ===== Customer Care ===== */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3 text-success">Customer Care</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none small">FAQs</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Shipping & Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Privacy Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none small">Terms of Service</a></li>
            </ul>
          </div>

          {/* ===== Contact Info ===== */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3 text-success">Get in Touch</h6>
            <p className="small mb-1">
              📍 123 Green Street, Pune, India
            </p>
            <p className="small mb-1">
              📞 +91 98765 43210
            </p>
            <p className="small mb-3">
              ✉️ support@milletsforhealth.com
            </p>
            {/* Social icons */}
            <div>
              <a href="#" className="btn btn-outline-success btn-sm me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-success btn-sm me-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-success btn-sm me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-success btn-sm">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* ===== Copyright Bar ===== */}
        <div className="text-center border-top border-secondary pt-3 mt-4">
          <p className="small mb-0">
            © {new Date().getFullYear()} <span className="text-success fw-bold">Millets For Health</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
