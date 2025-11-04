import React from "react";

const BlogEvents = () => {
  const items = [
    {
      title:
        "A Healthy You Starts with a Healthy Gut: The Role of Millets in Gut Health",
      date: "14/07/2025",
      comments: "No Comments",
      image:
        "https://milletsforhealth.com/wp-content/uploads/2025/07/145602.jpg",
      description:
        "It’s an ancient truth gaining modern scientific backing: your gut is incredibly central to your overall well-being. Far from just...",
      link: "#",
    },
    {
      title: "Little Millet Idlis",
      date: "02/07/2025",
      comments: "No Comments",
      image:
        "https://milletsforhealth.com/wp-content/uploads/2025/07/imgi_2_Little_Millet_Idli_Rava_Millets_for_Health_-_Copy.jpg",
      description:
        "Use our Little Millet Rava instead of ultra refined sooji to make rava Idlis with this easy recipe.",
      link: "#",
    },
    {
      title: "Proso Millet Faara / Gojha / Pitha",
      date: "02/07/2025",
      comments: "No Comments",
      image:
        "https://milletsforhealth.com/wp-content/uploads/2025/07/imgi_2_DSC_0062.jpg",
      description:
        "Phara/ Gojha is an eastern UP and Bihari recipe. In this version we have given it a millet twist.",
      link: "#",
    },
  ];

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="mb-5 position-relative">
        <span className="text-warning fw-bold" style={{ fontSize: "1.2rem" }}>
          Blog &amp; Events
        </span>
        <h1 className="fw-bold mt-2 mb-3" style={{ fontSize: "2.5rem" }}>
          Latest Updates &amp; News
        </h1>
        <a
          href="#"
          className="btn btn-success px-4 py-2 position-absolute"
          style={{ right: 0, top: 0 }}
        >
          Explore All
        </a>
      </div>

      {/* Blog/Event Cards */}
      <div className="row justify-content-center">
        {items.map((item, index) => (
          <div className="col-md-4 mb-4 d-flex p-3" key={index}>
            <div className="card flex-fill h-100 border-0 shadow-sm rounded-4">
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top p-3 rounded-4"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{item.title}</h5>
                <p
                  className="text-muted mb-2"
                  style={{ fontSize: "0.8rem", letterSpacing: "0.3px" }}
                >
                  {item.date} &nbsp;///&nbsp; {item.comments}
                </p>
                <p
                  className="card-text text-secondary"
                  style={{ fontSize: "0.95rem", lineHeight: "1.5" }}
                >
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="text-success fw-semibold text-decoration-none"
                >
                  Read More &raquo;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogEvents;
