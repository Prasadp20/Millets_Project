import React from "react";
import { NavLink } from "react-router-dom";

export default function OrderMillet() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://images.pexels.com/photos/25858342/pexels-photo-25858342.jpeg?_gl=1*524vz3*_ga*MTExMjU0Njg2OC4xNzYxMzM5MjI2*_ga_8JE65Q40S6*czE3NjEzMzkyMjUkbzEkZzEkdDE3NjEzMzk4NzAkajU5JGwwJGgw')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // 🆕 Keeps the background image static
        height: "40vh",
        color: "white",
      }}
    >
      <div
        className="p-5 rounded-4"
        style={{
          // backgroundColor: "rgba(0, 0, 0, 0.5)", // 🆕 Added semi-transparent dark overlay for readability
          maxWidth: "700px",
        }}
      >
        <h2 className="fw-bold mb-3">To order freshly cooked millet food</h2>
        <p className="fs-5 mb-4">
          Nourish your body with the power of ancient grains — order now!
        </p>
        <NavLink to="/freshmilletfood" className="btn btn-success px-4 py-2 rounded-pill fw-semibold" style={{ width: "150px" }}>
          Order Now
        </NavLink>
      </div>
    </div>
  );
}
