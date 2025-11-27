import React from "react";

export default function TestimonialCarousel() {
  const milletBenefits = [
    {
      title: "Better Environment",
      description:
        "The sustainable cultivation of millets supports climate-resilient food production. Millets withstand drought, heat and poor soil conditions, and require minimal inputs and maintenance. They require less water and contribute to soil conservation and biodiversity preservation.",
      image:
        "https://www.fao.org/images/internationalyearofmilletslibraries/default-album/join-the-iym-photo-contest.jpg?sfvrsn=ffadcfdf_11",
    },
    {
      title: "Better Life",
      description:
        "Millets can play a vital role in ensuring food security and nutrition. By promoting sustainable consumption, leveraging market opportunities, and supporting smallholder farmers, millets improve livelihoods and empower communities.",
      image:
        "https://www.fao.org/images/internationalyearofmilletslibraries/default-album/@fao-aldo-youssouf.jpg?sfvrsn=be041b1b_13",
    },
    {
      title: "Better Production",
      description:
        "Millets offer high yield potential even in unfavourable growing conditions. Their resilience to pests, short growth cycles, and minimal input needs make them a sustainable and economically viable crop.",
      image:
        "https://www.fao.org/images/internationalyearofmilletslibraries/default-album/why-did-un-declare-2023-as-international-year-of-millets.jpg?sfvrsn=e41178ce_23",
    },
    {
      title: "Better Nutrition",
      description:
        "Millets are rich in essential nutrients, fibre, and antioxidants. They support healthy diets, help regulate blood sugar, and add diversity and flavour to our meals.",
      image:
        "https://www.fao.org/images/internationalyearofmilletslibraries/default-album/@fao-aldo-youssouf-2268ebe6f708a46fdbf114861dd6e9448.jpg?sfvrsn=107b3644_14",
    },
  ];

  return (
    <div
      id="milletCarousel"
      className="carousel slide my-5"
      data-bs-ride="carousel"
      style={{ position: "relative" }}
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {milletBenefits.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#milletCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {milletBenefits.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ position: "relative" }}
          >
            {/* Image */}
            <img
              src={item.image}
              className="d-block w-100"
              alt={item.title}
              style={{
                objectFit: "cover",
                height: "500px",
                filter: "brightness(60%)",
              }}
            />

            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            ></div>

            {/* Centered Text */}
            <div
              className="text-center text-white px-4"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                maxWidth: "900px",
              }}
            >
              <h2 className="fw-bold mb-3">{item.title}</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#milletCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#milletCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

