import React from "react";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      quote:
        "Millets for health is the best thing I got introduced to. Their products are very high quality.",
      name: "Kanika Jain",
      rating: 5,
      avatarUrl: "https://via.placeholder.com/60/999999/FFFFFF?text=KJ",
    },
    {
      quote:
        "Excellent quality and great taste! The millet flour and pasta are staples in our home now. I can really feel the difference in health and energy levels.",
      name: "Rohit Sharma",
      rating: 4,
      avatarUrl: "https://via.placeholder.com/60/888888/FFFFFF?text=RS",
    },
    {
      quote:
        "Healthy and tasty — finally something my kids also enjoy! Packaging and delivery were perfect too.",
      name: "Sneha Patel",
      rating: 5,
      avatarUrl: "https://via.placeholder.com/60/777777/FFFFFF?text=SP",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        style={{
          color: index < rating ? "#ffc107" : "#e4e5e9",
          fontSize: "1.2rem",
        }}
      >
        &#9733;
      </span>
    ));
  };

  return (
    // 🔹 Added "position-relative" so overlay can be absolutely positioned
    <div
      className="container-fluid text-center py-5 position-relative"
      style={{
        backgroundImage:      
          "url('https://plus.unsplash.com/premium_photo-1726729279950-224b83ae7a75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}
    >
      {/* 🔹 Added dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust darkness here
          zIndex: 1,
        }}
      ></div>

      {/* 🔹 Wrapped content inside position-relative so it stays above overlay */}
      <div className="position-relative z-2">
        <div
          className="rounded-4 shadow-lg mx-auto p-5"
          style={{
            // backgroundColor: "rgba(34, 18, 5, 0.85)",
            maxWidth: "1000px",
          }}
        >
          <p
            className="text-warning mb-2 fw-semibold"
            style={{ fontSize: "1.1rem" }}
          >
            Testimonials
          </p>
          <h2 className="fw-bold mb-4 display-6">
            Customer Experiences Shared
          </h2>

          {/* Bootstrap Carousel */}
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {testimonials.map((t, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <p
                    className="lead mx-auto mb-4 fst-italic"
                    style={{ maxWidth: "700px", lineHeight: "1.7" }}
                  >
                    “{t.quote}”
                  </p>

                  <div className="d-flex flex-column align-items-center">
                    <div
                      className="mb-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        backgroundImage: `url(${t.avatarUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        border: "3px solid white",
                      }}
                    ></div>

                    <h5 className="fw-semibold mb-2">{t.name}</h5>
                    <div>{renderStars(t.rating)}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
