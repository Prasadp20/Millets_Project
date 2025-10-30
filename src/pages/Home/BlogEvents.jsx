import React from "react";
// Import your images like below if placing them in src/assets
// import img1 from './assets/img1.jpg';
// import img2 from './assets/img2.jpg';
// import img3 from './assets/img3.jpg';

const BlogEvents = () => {
  return (
    <div className="container my-5">
      <div className="mb-4 position-relative">
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
      
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-4 mb-4 d-flex p-3">
          <div className="card flex-fill h-100">
            {/* <img src={img1} className="card-img-top" alt="Healthy Gut" /> */}
            <img src="https://milletsforhealth.com/wp-content/uploads/2025/07/145602.jpg" className="card-img-top p-3" alt="Healthy Gut" />
            <div className="card-body">
              <h5 className="card-title fw-semibold">
                A Healthy You Starts with a Healthy Gut: The Role of Millets in Gut Health
              </h5>
              <p className="card-text text-muted mb-2" style={{ fontSize: "0.7rem" }}>
                14/07/2025 &nbsp;///&nbsp; No Comments
              </p>
              <p className="card-text" style={{ fontSize: "0.95rem" }}>
                It’s an ancient truth gaining modern scientific backing: your gut is incredibly central to your overall well-being. Far from just
              </p>
              <a href="#" className="text-success">
                Read More &raquo;
              </a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4 mb-4 d-flex p-3">
          <div className="card flex-fill h-100">
            {/* <img src={img2} className="card-img-top" alt="Little Millet Idlis" /> */}
            <img src="https://milletsforhealth.com/wp-content/uploads/2025/07/imgi_2_Little_Millet_Idli_Rava_Millets_for_Health_-_Copy.jpg" className="card-img-top p-3" alt="Little Millet Idlis" />
            <div className="card-body">
              <h5 className="card-title fw-semibold">Little Millet Idlis</h5>
              <p className="card-text text-muted mb-2" style={{ fontSize: "0.7rem" }}>
                02/07/2025 &nbsp;///&nbsp; No Comments
              </p>
              <p className="card-text" style={{ fontSize: "0.95rem" }}>
                Use our Little Millet Rava instead of ultra refined sooji to make rava Idlis with this easy recipe.
              </p>
              <a href="#" className="text-success">
                Read More &raquo;
              </a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4 mb-4 d-flex p-3">
          <div className="card flex-fill h-100">
            {/* <img src={img3} className="card-img-top" alt="Proso Millet Faara" /> */}
            <img src="https://milletsforhealth.com/wp-content/uploads/2025/07/imgi_2_DSC_0062.jpg" className="card-img-top p-3" alt="Proso Millet Faara" />
            <div className="card-body">
              <h5 className="card-title fw-semibold">Proso Millet Faara/gojha/pitha</h5>
              <p className="card-text text-muted mb-2" style={{ fontSize: "0.7rem" }}>
                02/07/2025 &nbsp;///&nbsp; No Comments
              </p>
              <p className="card-text" style={{ fontSize: "0.95rem" }}>
                Phara/ Gojha is an eastern UP and Bihari recipe. In this version we have given it a millet twist.
              </p>
              <a href="#" className="text-success">
                Read More &raquo;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEvents;
