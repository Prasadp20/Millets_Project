import React from "react";

export default function MilletCategories() {
  const categories = [

    // added by me
    {name : "Cold Pressed Oil", color: "#fff5e6", image: "https://milletsforhealth.com/wp-content/uploads/2025/07/12.png"},
    {name : "Millet Bakes", color: "#e6fff2", image: "https://milletsforhealth.com/wp-content/uploads/2025/07/1-1.png"},
    {name : "Millet Batter", color: "rgba(255, 245, 230, 1)", image: "https://milletsforhealth.com/wp-content/uploads/2025/07/10.png"},
    {name : "Millets Daliya", color: "#e6fff2", image: "https://milletsforhealth.com/wp-content/uploads/2025/07/2.png"},
    {name : "Combo", color: "#f0f7f0", image: "https://milletsforhealth.com/wp-content/uploads/2025/07/7.png"},
    {name : "Millet Pre Mixed", color: "#e6fff2", image: "https://milletsforhealth.com/wp-content/uploads/2025/07/5.png"},
    {name : "Millet Pasta", color: "#fff5e6", image: "https://milletsforhealth.com/wp-content/uploads/2025/08/Group-9.png"},
    {name : "Millet Noodles", color: "#e6fff2", image: "https://milletsforhealth.com/wp-content/uploads/2025/08/Group-11.png"},
    {name : "Gift Hampers", color: "#f0f7f0", image: "https://milletsforhealth.com/wp-content/uploads/2025/08/Group-12.png"},
    {name : "Millet Snacks", color: "#fff5e6", image: "https://milletsforhealth.com/wp-content/uploads/2025/07/6.png"},
    {name : "Unpolished Millets", color: "#e6fff2", image: "https://milletsforhealth.com/wp-content/uploads/2025/07/9.png"},
    {name : "Millet Flours", color: "#f0f7f0", image: "https://milletsforhealth.com/wp-content/uploads/2025/07/3.png"},
  ];

  // Group categories into chunks of 6
  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 6) {
    groupedCategories.push(categories.slice(i, i + 6));
  }

  return (
    <section className="py-5 bg-white my-4">
      <div className="container position-relative">
        {/* --- Header --- */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-8">
            <p className="fw-bold mb-1 text-warning text-uppercase">Categories</p>
            <h2 className="fw-bold display-6">Find Your Millet Match</h2>
          </div>
          <div className="col-md-4 text-md-end">
            <button className="btn btn-success px-4 py-2 shadow-sm fw-semibold rounded-3">
              Explore All
            </button>
          </div>
        </div>

        {/* --- Carousel Wrapper --- */}
        <div className="d-flex align-items-center justify-content-center">
          {/* Left Arrow */}
          <button
            className="btn btn-success rounded-circle me-3 shadow-sm"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="prev"
            style={{
              width: "45px",
              height: "45px",
            }}
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          {/* Carousel */}
          <div
            id="categoryCarousel"
            className="carousel slide w-100"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {groupedCategories.map((group, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="row justify-content-center g-3">
                    {group.map((item, idx) => (
                      <div
                        key={idx}
                        className="col-6 col-sm-4 col-md-2 d-flex justify-content-center"
                      >
                        <div
                          className="card border-0 text-center h-100 shadow-sm"
                          style={{
                            borderRadius: "1rem",
                            backgroundColor: item.color,
                            transition: "all 0.3s ease",
                            width: "100%",
                            maxWidth: "160px",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "translateY(-4px)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                          }
                        >
                          <div
                            className="rounded-circle d-flex justify-content-center align-items-center mx-auto mt-4 shadow-sm"
                            style={{
                              width: "80px",
                              height: "80px",
                              backgroundColor: "#fff",
                            }}
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="img-fluid"
                              style={{
                                width: "75%",
                                height: "75%",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                          <div className="card-body p-3">
                            <h6 className="fw-semibold text-dark mb-0">
                              {item.name}
                            </h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="btn btn-success rounded-circle ms-3 shadow-sm"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="next"
            style={{
              width: "45px",
              height: "45px",
            }}
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
