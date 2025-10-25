import React from "react";

export default function FreshProduct_Discount() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">

        {/* Fresh Product Card */}
        <div
          className="col-md-5 border rounded-4 p-5 m-3 shadow-sm text-start text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://plus.unsplash.com/premium_photo-1699453179951-4f51c39644ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')", // 🆕 Background image + dark overlay
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-light mb-1 p-2">Fresh Product</p>
          <h2 className="fw-semibold p-2">Wholesome Freshness Every Day</h2>
          <p><a href="#" className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover p-2">Explore All</a></p>

        </div>

        {/* Discount Card */}
        <div
          className="col-md-5 border rounded-4 p-5 m-3 text-start text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://images.pexels.com/photos/5579147/pexels-photo-5579147.jpeg?_gl=1*i6wyek*_ga*MTExMjU0Njg2OC4xNzYxMzM5MjI2*_ga_8JE65Q40S6*czE3NjEzMzkyMjUkbzEkZzEkdDE3NjEzNDA3MTUkajExJGwwJGgw')", // 🆕 Background image + dark overlay
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white mb-1 p-2">Discount</p>
          <h2 className="fw-semibold p-2">Limited-Time Healthful Saving</h2>
          <p><a href="#" className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover p-2">Explore All</a></p>
        </div>

      </div>
    </div>
  );
}

