// import React from "react";

// export default function TestimonialCarousel() {
//   const testimonials = [
//     {
//       quote:
//         "Millets for health is the best thing I got introduced to. Their products are very high quality.",
//       name: "Kanika Jain",
//       rating: 5,
//       avatarUrl: "https://via.placeholder.com/60/999999/FFFFFF?text=KJ",
//     },
//     {
//       quote:
//         "Excellent quality and great taste! The millet flour and pasta are staples in our home now. I can really feel the difference in health and energy levels.",
//       name: "Rohit Sharma",
//       rating: 4,
//       avatarUrl: "https://via.placeholder.com/60/888888/FFFFFF?text=RS",
//     },
//     {
//       quote:
//         "Healthy and tasty — finally something my kids also enjoy! Packaging and delivery were perfect too.",
//       name: "Sneha Patel",
//       rating: 5,
//       avatarUrl: "https://via.placeholder.com/60/777777/FFFFFF?text=SP",
//     },
//   ];

//   // ✅ Correct JavaScript array declaration (removed TypeScript syntax)
//   const milletBenefits = [
//     {
//       title: "Better Environment",
//       description:
//         "The sustainable cultivation of millets supports climate-resilient food production. Millets withstand drought, heat and poor soil conditions, and require minimal inputs and maintenance. Millets are tolerant or resistant to diseases and pests, and are more resilient to climate shocks and stresses than other cereals. Millets require less water compared to other grains, making them suitable for territories facing water scarcity. They also contribute to soil conservation and biodiversity preservation. By covering arid areas, they contribute to soil restoration and reduce degradation.",
//     },
//     {
//       title: "Better Life",
//       description:
//         "Millets can play a vital role in ensuring food security and nutrition. Millets are deeply rooted in Indigenous Peoples’ cultures and traditions and, for centuries, they have been a traditional staple crop for hundreds of millions of people in sub-Saharan Africa, South Asia and East Asia. In arid areas, millets are often the only crops that can be harvested in the dry season and are a crucial part of the household food basket. By overcoming food scarcity in difficult periods, they can contribute to the food security and nutrition of vulnerable populations. Promoting sustainable consumption of millets, leveraging market opportunities and creating additional revenue sources, millets can support the livelihoods of different actors involved across the value chain, including smallholder farmers, young people, women and Indigenous Peoples.",
//     },
//     {
//       title: "Better Production",
//       description:
//         "Millets offer numerous advantages for those who produce them. With their high yield potential, even in unfavourable growing conditions, their short growth cycles and their resilience to pests and diseases, they are a sustainable and economically viable choice. Multiple harvests in a year provide flexibility, while lower reliance on pesticides and synthetic fertilizers promotes environmentally friendly practices. Enhancing the production of millets can support the transformation to more efficient, inclusive, resilient and sustainable agrifood systems.",
//     },
//     {
//       title: "Better Nutrition",
//       description:
//         "In their diversity, millets provide various essential nutrients and can contribute to healthy diets with the vitamins, dietary fibre, antioxidants, protein and minerals, including iron, they offer. As whole grains, their dietary fibre can help regulate bowel function, blood sugar and lipids, and promote satiation. Their diverse flavours and textures add variety to our meals and enhance culinary experiences.",
//     },
//   ];

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <span
//         key={index}
//         style={{
//           color: index < rating ? "#ffc107" : "#e4e5e9",
//           fontSize: "1.2rem",
//         }}
//       >
//         &#9733;
//       </span>
//     ));
//   };

//   return (
//     <div
//       className="container-fluid text-center py-5 position-relative"
//       style={{
//         backgroundImage:
//           "url('https://plus.unsplash.com/premium_photo-1726729279950-224b83ae7a75?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         color: "white",
//       }}
//     >
//       {/* Dark overlay */}
//       <div
//         className="position-absolute top-0 start-0 w-100 h-100"
//         style={{
//           backgroundColor: "rgba(0, 0, 0, 0.6)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Carousel content */}
//       <div className="position-relative z-2">
//         <div
//           className="rounded-4 shadow-lg mx-auto p-5"
//           style={{
//             maxWidth: "1000px",
//           }}
//         >
//           <p
//             className="text-warning mb-2 fw-semibold"
//             style={{ fontSize: "1.1rem" }}
//           >
//             Testimonials
//           </p>
//           <h2 className="fw-bold mb-4 display-6">
//             Customer Experiences Shared
//           </h2>

//           {/* Bootstrap Carousel */}
//           <div
//             id="testimonialCarousel"
//             className="carousel slide"
//             data-bs-ride="carousel"
//           >
//             <div className="carousel-inner">
//               {testimonials.map((t, index) => (
//                 <div
//                   className={`carousel-item ${index === 0 ? "active" : ""}`}
//                   key={index}
//                 >
//                   <p
//                     className="lead mx-auto mb-4 fst-italic"
//                     style={{ maxWidth: "700px", lineHeight: "1.7" }}
//                   >
//                     “{t.quote}”
//                   </p>

//                   <div className="d-flex flex-column align-items-center">
//                     <div
//                       className="mb-3"
//                       style={{
//                         width: "70px",
//                         height: "70px",
//                         borderRadius: "50%",
//                         backgroundImage: `url(${t.avatarUrl})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         border: "3px solid white",
//                       }}
//                     ></div>

//                     <h5 className="fw-semibold mb-2">{t.name}</h5>
//                     <div>{renderStars(t.rating)}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Carousel Controls */}
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#testimonialCarousel"
//               data-bs-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#testimonialCarousel"
//               data-bs-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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

