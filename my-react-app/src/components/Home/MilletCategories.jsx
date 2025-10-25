// import React from "react";

// export default function MilletCategories() {
//   const categories = [
//     { name: "Millet Pasta", color: "#fff5e6", image: "https://via.placeholder.com/100?text=Pasta" },
//     { name: "Millet Noodles", color: "#e6fff2", image: "https://via.placeholder.com/100?text=Noodles" },
//     { name: "Gift Hampers", color: "#fff5e6", image: "https://via.placeholder.com/100?text=Hampers" },
//     { name: "Millet Snacks", color: "#e6fff2", image: "https://via.placeholder.com/100?text=Snacks" },
//     { name: "Unpolished Millets", color: "#f0f7f0", image: "https://via.placeholder.com/100?text=Millets" },
//     { name: "Millet Flour", color: "#e6fff2", image: "https://via.placeholder.com/100?text=Flour" },
//   ];

//   const groupedCategories = [];
//   for (let i = 0; i < categories.length; i += 3) {
//     groupedCategories.push(categories.slice(i, i + 3));
//   }

//   return (
//     <section className="py-5 bg-white">
//       <div className="container position-relative">
//         {/* --- Header --- */}
//         <div className="row mb-4 align-items-center">
//           <div className="col-md-8">
//             <p className="fw-bold mb-1 text-success text-uppercase">Categories</p>
//             <h2 className="fw-bold display-6">Find Your Millet Match</h2>
//           </div>
//           <div className="col-md-4 text-md-end">
//             <button className="btn btn-success px-4 py-2 shadow-sm fw-semibold rounded-3">
//               Explore All
//             </button>
//           </div>
//         </div>

//         {/* --- Carousel Wrapper --- */}
//         <div className="d-flex align-items-center justify-content-center">
//           {/* Left Arrow */}
//           <button
//             className="btn btn-success rounded-circle me-3 shadow-sm"
//             type="button"
//             data-bs-target="#categoryCarousel"
//             data-bs-slide="prev"
//             style={{
//               width: "45px",
//               height: "45px",
//             }}
//           >
//             <span className="carousel-control-prev-icon"></span>
//           </button>

//           {/* Carousel */}
//           <div
//             id="categoryCarousel"
//             className="carousel slide w-100"
//             data-bs-ride="carousel"
//             data-bs-interval="4000"
//             style={{ maxWidth: "900px" }}
//           >
//             <div className="carousel-inner">
//               {groupedCategories.map((group, index) => (
//                 <div
//                   key={index}
//                   className={`carousel-item ${index === 0 ? "active" : ""}`}
//                 >
//                   <div className="row justify-content-center">
//                     {group.map((item, idx) => (
//                       <div key={idx} className="col-md-3 col-sm-6 mb-3">
//                         <div
//                           className="card border-0 text-center h-100 shadow-sm"
//                           style={{
//                             borderRadius: "1rem",
//                             backgroundColor: item.color,
//                             transition: "all 0.3s ease",
//                             width: "100%",
//                             maxWidth: "220px", // smaller boxes
//                             margin: "auto",
//                           }}
//                           onMouseEnter={(e) =>
//                             (e.currentTarget.style.transform = "translateY(-4px)")
//                           }
//                           onMouseLeave={(e) =>
//                             (e.currentTarget.style.transform = "translateY(0)")
//                           }
//                         >
//                           <div
//                             className="rounded-circle d-flex justify-content-center align-items-center mx-auto mt-4 shadow-sm"
//                             style={{
//                               width: "90px",
//                               height: "90px",
//                               backgroundColor: "#fff",
//                             }}
//                           >
//                             <img
//                               src={item.image}
//                               alt={item.name}
//                               className="img-fluid"
//                               style={{
//                                 width: "80%",
//                                 height: "80%",
//                                 objectFit: "contain",
//                               }}
//                             />
//                           </div>
//                           <div className="card-body p-3">
//                             <h6 className="fw-semibold text-dark mb-0">
//                               {item.name}
//                             </h6>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Arrow */}
//           <button
//             className="btn btn-success rounded-circle ms-3 shadow-sm"
//             type="button"
//             data-bs-target="#categoryCarousel"
//             data-bs-slide="next"
//             style={{
//               width: "45px",
//               height: "45px",
//             }}
//           >
//             <span className="carousel-control-next-icon"></span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function MilletCategories() {
  const categories = [
    { name: "Millet Pasta", color: "#fff5e6", image: "https://via.placeholder.com/100?text=Pasta" },
    { name: "Millet Noodles", color: "#e6fff2", image: "https://via.placeholder.com/100?text=Noodles" },
    { name: "Gift Hampers", color: "#fff5e6", image: "https://via.placeholder.com/100?text=Hampers" },
    { name: "Millet Snacks", color: "#e6fff2", image: "https://via.placeholder.com/100?text=Snacks" },
    { name: "Unpolished Millets", color: "#f0f7f0", image: "https://via.placeholder.com/100?text=Millets" },
    { name: "Millet Flour", color: "#e6fff2", image: "https://via.placeholder.com/100?text=Flour" },
    { name: "Millet Cookies", color: "#fff5e6", image: "https://via.placeholder.com/100?text=Cookies" },
    { name: "Millet Energy Bars", color: "#e6fff2", image: "https://via.placeholder.com/100?text=Bars" },
    { name: "Millet Cereal", color: "#f0f7f0", image: "https://via.placeholder.com/100?text=Cereal" },
    { name: "Millet Rice", color: "#fff5e6", image: "https://via.placeholder.com/100?text=Rice" },
    { name: "Millet Crackers", color: "#e6fff2", image: "https://via.placeholder.com/100?text=Crackers" },
    { name: "Millet Pancakes", color: "#f0f7f0", image: "https://via.placeholder.com/100?text=Pancakes" },
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
            <p className="fw-bold mb-1 text-success text-uppercase">Categories</p>
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
