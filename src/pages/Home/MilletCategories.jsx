import React from "react";
import { NavLink } from "react-router-dom";

export default function MilletCategories() {
  const categories = [
    {
      name: "Sorghum Samosa",
      color: "#fff5e6",
      image: "https://gramisuperfoods.com/wp-content/webp-express/webp-images/uploads/2023/02/samosa.jpg.webp",
      videoUrl: "https://www.youtube.com/embed/Ukry5NEQ_dg?si=-TNLmu0tah6jAVQi",
      recipe: {
        title: "Sorghum Samosa",
        ingredients: [
          "1 cup Sorghum flour (jowar flour)",
          "1 cup Maida (refined flour)",
          "1 cup boiled potatoes",
          "Boiled peas (as required)",
          "Onions, finely chopped",
          "Green chillies, chopped",
          "Curry leaves, chopped",
          "Salt to taste",
          "Oil for deep frying",
          "Tomato sauce or chutney (for serving)"
        ],
        steps: [
          {
            stepTitle: "Prepare the Dough",
            instructions: [
              "Combine 1 cup sorghum flour and 1 cup maida in a mixing bowl.",
              "Add water gradually and knead into a smooth dough.",
              "Make small dough balls and roll each into a thin chapati.",
              "Cut each chapati into halves and set aside."
            ]
          },
          {
            stepTitle: "Make the Filling",
            instructions: [
              "Mash the boiled potatoes in a bowl.",
              "Add chopped onions, green chillies, curry leaves, boiled peas, and salt to taste.",
              "Mix well to make a flavorful stuffing."
            ]
          },
          {
            stepTitle: "Shape the Samosas",
            instructions: [
              "Take one half of the rolled chapati.",
              "Fill the prepared mixture inside and fold it into a triangular samosa shape.",
              "Seal the edges properly using a little water."
            ]
          },
          {
            stepTitle: "Fry the Samosas",
            instructions: [
              "Heat oil in a deep pan.",
              "Gently drop the samosas into the hot oil and deep fry until golden brown and crisp.",
              "Remove and drain excess oil on paper towels."
            ]
          },
          {
            stepTitle: "Serve and Enjoy",
            instructions: [
              "Serve hot with tomato sauce or your favorite chutney.",
              "Enjoy your delicious and healthy Sorghum Samosas!"
            ]
          }
        ]
      }
    },
    {
      name: "Sorghum Dosa",
      color: "#e6fff2",
      image: "https://b2958125.smushcdn.com/2958125/wp-content/uploads/instant-millet-dosa-1-5.jpg?lossy=1&strip=1&webp=1",
      videoUrl: "https://www.youtube.com/embed/SUH-7aqnNTk?si=iKEmnNdO3GxcuHuF",
      recipe: {
        title: "Sorghum Dosa",
        ingredients: [
          "3 cups Sorghum grain",
          "1 cup Black gram dal (urad dal)",
          "Salt to taste",
          "Oil (for shallow frying)",
          "Chutney (for serving)"
        ],
        steps: [
          {
            stepTitle: "Prepare the Batter",
            instructions: [
              "Soak sorghum grains and black gram dal for a few hours.",
              "Grind them together into a smooth, fine batter.",
              "Add salt to taste and mix well.",
              "Allow the batter to ferment for several hours or overnight for best results."
            ]
          },
          {
            stepTitle: "Cook the Dosa",
            instructions: [
              "Heat a dosa tawa (griddle) and apply a teaspoon of oil evenly.",
              "Pour a ladleful of batter onto the hot tawa and spread it into a thin, round shape.",
              "Cook on medium flame until the dosa turns crisp and golden brown.",
              "Drizzle a few drops of oil around the edges if needed."
            ]
          },
          {
            stepTitle: "Serve and Enjoy",
            instructions: [
              "Serve hot with your favorite chutney.",
              "Enjoy your light, crispy, and healthy Sorghum Dosa!"
            ]
          }
        ]
      }
    },
    {
      name: "Pearl Millet Upma",
      color: "rgba(255, 245, 230, 1)",
      image: "https://milletz.com/wp-content/uploads/2023/03/upma.jpg",
      videoUrl: "https://www.youtube.com/embed/ewf1XgBTa_U?si=CmEUQ1C_gLtGq2GO",
      recipe: {
        title: "Pearl Millet Upma",
        ingredients: [
          "1 cup Pearl millet (bajra), coarsely ground or broken",
          "2 cups Water",
          "1 tbsp Oil or ghee",
          "1 tsp Mustard seeds",
          "1 tsp Urad dal (split black gram)",
          "1 tsp Chana dal (split Bengal gram)",
          "1 Onion, finely chopped",
          "1–2 Green chillies, chopped",
          "Few Curry leaves",
          "Salt to taste",
          "Fresh coriander leaves for garnish",
          "Lemon juice (optional)"
        ],
        steps: [
          {
            stepTitle: "Roast the Pearl Millet",
            instructions: [
              "Heat a pan and dry roast the pearl millet for 2–3 minutes until it gives a nutty aroma.",
              "Remove and set aside."
            ]
          },
          {
            stepTitle: "Prepare the Seasoning",
            instructions: [
              "Heat oil or ghee in a pan.",
              "Add mustard seeds, urad dal, and chana dal.",
              "When they start to splutter, add chopped onions, green chillies, and curry leaves.",
              "Sauté until the onions turn slightly golden."
            ]
          },
          {
            stepTitle: "Cook the Upma",
            instructions: [
              "Add 2 cups of water to the pan and bring it to a boil.",
              "Add salt to taste.",
              "Slowly add the roasted pearl millet while stirring continuously to avoid lumps.",
              "Cover and cook on low flame for 5–7 minutes until the water is absorbed and the millet turns soft."
            ]
          },
          {
            stepTitle: "Serve and Enjoy",
            instructions: [
              "Fluff up the upma with a spoon.",
              "Garnish with fresh coriander leaves and a squeeze of lemon juice if desired.",
              "Serve hot and enjoy your healthy Pearl Millet Upma!"
            ]
          }
        ]
      }
    },
    {
      name: "Millets Daliya",
      color: "#e6fff2",
      image: "https://milletsforhealth.com/wp-content/uploads/2025/07/2.png",
      videoUrl: "https://www.youtube.com/embed/D94ifd_Hwbo?si=9ABrgGlg53GNiEEG",
      recipe: {
        title: "Millet Daliya",
        ingredients: [
          "1 cup Broken millet (any variety – foxtail, barnyard, or little millet)",
          "1½ cups Water",
          "1/2 cup Milk (optional, for a richer texture)",
          "1 tbsp Ghee or oil",
          "1 small Onion, finely chopped (for savory version)",
          "1 Tomato, chopped (optional)",
          "1–2 Green chillies, chopped",
          "A few Curry leaves",
          "1/2 tsp Mustard seeds",
          "1/2 tsp Cumin seeds",
          "1/4 tsp Turmeric powder",
          "Salt to taste",
          "Fresh coriander leaves for garnish",
          "(For sweet version: Jaggery, cardamom powder, and dry fruits)"
        ],
        steps: [
          {
            stepTitle: "Roast the Millet",
            instructions: [
              "Heat a pan and dry roast the broken millet on low flame for 3–4 minutes until aromatic.",
              "Remove and set aside."
            ]
          },
          {
            stepTitle: "Prepare the Seasoning",
            instructions: [
              "Heat ghee or oil in a pressure cooker or pan.",
              "Add mustard seeds and cumin seeds; let them splutter.",
              "Add chopped onions, green chillies, curry leaves, and turmeric powder.",
              "Sauté until the onions turn golden brown.",
              "Add chopped tomatoes and cook until soft."
            ]
          },
          {
            stepTitle: "Cook the Daliya",
            instructions: [
              "Add the roasted millet to the pan and mix well with the seasoning.",
              "Pour in water (and milk if desired).",
              "Add salt to taste and stir.",
              "Pressure cook for 2–3 whistles or simmer covered until the millet becomes soft and fluffy."
            ]
          },
          {
            stepTitle: "Serve and Enjoy",
            instructions: [
              "Garnish with fresh coriander leaves.",
              "Serve hot with curd or pickle for a savory meal, or add jaggery and cardamom for a sweet version.",
              "Enjoy your wholesome and nourishing Millet Daliya!"
            ]
          }
        ]
      }
    },
    {
      name: "Pearl Millet Khichdi",
      color: "#f0f7f0",
      image: "https://www.zaykakatadka.com/wp-content/uploads/2019/01/IMG-20190118-WA0000.jpg",
      videoUrl: "https://www.youtube.com/embed/06ORida51fA?si=vrD1SwU3csWC_09h",
      recipe: {
        title: "Pearl Millet Khichdi",
        ingredients: [
          "1 cup Pearl millet (bajra), coarsely crushed or broken",
          "1/2 cup Moong dal (split yellow gram)",
          "1 small Onion, finely chopped",
          "1 Tomato, chopped (optional)",
          "1–2 Green chillies, chopped",
          "1/2 tsp Cumin seeds",
          "1/4 tsp Turmeric powder",
          "1 tbsp Ghee or oil",
          "3 cups Water (adjust for desired consistency)",
          "Salt to taste",
          "Fresh coriander leaves for garnish"
        ],
        steps: [
          {
            stepTitle: "Prepare the Millet and Dal",
            instructions: [
              "Wash the pearl millet and moong dal thoroughly in water.",
              "Soak them together for about 20–30 minutes.",
              "Drain and keep aside."
            ]
          },
          {
            stepTitle: "Make the Seasoning",
            instructions: [
              "Heat ghee or oil in a pressure cooker or deep pan.",
              "Add cumin seeds and let them splutter.",
              "Add chopped onions and green chillies; sauté until the onions turn light golden.",
              "Add chopped tomatoes (if using) and cook until soft.",
              "Add turmeric powder and salt, and mix well."
            ]
          },
          {
            stepTitle: "Cook the Khichdi",
            instructions: [
              "Add the soaked pearl millet and moong dal to the pan.",
              "Pour in 3 cups of water and stir everything together.",
              "Pressure cook for 3–4 whistles or cook covered until the millet and dal turn soft and mushy."
            ]
          },
          {
            stepTitle: "Serve and Enjoy",
            instructions: [
              "Once done, gently mix the khichdi.",
              "Garnish with fresh coriander leaves.",
              "Serve hot with curd or pickle and enjoy your wholesome Pearl Millet Khichdi!"
            ]
          }
        ]
      }
    },
    {
      name: "Finger Millet Laddu",
      color: "#e6fff2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAnXu9sN2q9Ag_7M6FuejVlw-tnHUmqtkEg&s",
      videoUrl: "https://www.youtube.com/embed/TqftpXbHhdo?si=KCK_S9qDA_Ig7HLI",
      recipe: {
        title: "Finger Millet Laddu",
        ingredients: [
          "1 cup Finger millet flour (ragi flour)",
          "3/4 cup Jaggery (grated or powdered)",
          "2 tbsp Ghee (clarified butter)",
          "2 tbsp Grated coconut (optional)",
          "2 tbsp Chopped nuts (cashews, almonds, etc.)",
          "1 tsp Cardamom powder",
          "2–3 tbsp Water (as needed to bind)"
        ],
        steps: [
          {
            stepTitle: "Roast the Ingredients",
            instructions: [
              "Heat a pan and dry roast the ragi flour on low flame for 5–6 minutes until it gives a nutty aroma.",
              "In another small pan, heat 1 tablespoon of ghee and roast the chopped nuts until golden.",
              "Add grated coconut (if using) and roast for a minute. Keep aside."
            ]
          },
          {
            stepTitle: "Prepare the Jaggery Syrup",
            instructions: [
              "In a separate pan, add grated jaggery and 2–3 tablespoons of water.",
              "Heat on low flame until the jaggery melts completely.",
              "Strain to remove impurities if necessary."
            ]
          },
          {
            stepTitle: "Combine and Mix",
            instructions: [
              "Add the roasted ragi flour, roasted nuts, coconut, and cardamom powder to the melted jaggery.",
              "Mix everything well while it’s still warm."
            ]
          },
          {
            stepTitle: "Shape the Laddus",
            instructions: [
              "Add a little ghee if the mixture feels dry.",
              "Take small portions and shape them into round laddus using your hands.",
              "Let them cool completely and set."
            ]
          },
          {
            stepTitle: "Serve and Enjoy",
            instructions: [
              "Store in an airtight container.",
              "Enjoy your healthy and delicious Finger Millet Laddus anytime!"
            ]
          }
        ]
      }
    },
    {
      name: "Millet Pasta",
      color: "#fff5e6",
      image: "https://milletsforhealth.com/wp-content/uploads/2025/08/Group-9.png",
      videoUrl: "https://www.youtube.com/embed/SbKCUc0D4pA?si=OS5eJg7NVtodt22Q",
      recipe: {
        title: "Millet Pasta Recipe",
        ingredients: [
          "1 pack of ready-to-cook Millet Pasta Mix",
          "Water (as needed for cooking)",
          "1 tbsp olive oil or any preferred cooking oil",
          "Vegetables of your choice (bell peppers, carrots, broccoli, etc.) - optional",
          "Salt & pepper to taste",
          "Grated cheese, fresh herbs, or chili flakes for garnish (optional)"
        ],
        steps: [
          {
            stepTitle: "Cook the Pasta",
            instructions: [
              "Boil 4 cups of water in a pan.",
              "Add a pinch of salt and a teaspoon of oil to prevent sticking.",
              "Add the Millet Pasta Mix and cook for 8-10 minutes until tender, stirring occasionally.",
              "Drain the pasta and rinse with cold water to stop the cooking process. Set aside."
            ]
          },
          {
            stepTitle: "Prepare the Vegetables (Optional)",
            instructions: [
              "In a separate pan, heat a tablespoon of olive oil.",
              "Add chopped vegetables of your choice and sauté until they are slightly tender but still crisp."
            ]
          },
          {
            stepTitle: "Combine and Flavor",
            instructions: [
              "Add the cooked millet pasta to the pan with vegetables.",
              "Season with salt, pepper, and your preferred herbs or spices.",
              "Toss everything together and cook for 2-3 minutes to let the flavors blend beautifully."
            ]
          },
          {
            stepTitle: "Serve and Enjoy",
            instructions: [
              "Garnish with grated cheese, fresh herbs, or chili flakes for extra flavor.",
              "Serve hot and enjoy your wholesome millet pasta!"
            ]
          }
        ]
      }
    },
    {
      name: "Millet Noodles",
      color: "#e6fff2",
      image: "https://naturallyyours.in/cdn/shop/files/13_5eb1e556-43c2-46a5-983c-bb9ed33194f2.png?v=1753429200",
      videoUrl:"https://www.youtube.com/embed/BKErK4oWW7Y?si=jA-Px3qv-hDas2BF",
      recipe: {
        title: "Millet Noodles",
        ingredients: [
          "1 pack millet noodles",
          "1 tbsp oil (any cooking oil)",
          "1 medium onion, sliced",
          "1 medium carrot, julienned",
          "1/2 cup cabbage, shredded",
          "1/2 cup capsicum, sliced",
          "2 cloves garlic, minced",
          "1 green chili, slit (optional)",
          "2 tbsp soy sauce",
          "1 tbsp vinegar",
          "1/2 tsp pepper powder",
          "Salt to taste",
          "Spring onions or coriander for garnish"
        ],
        steps: [
          {
            stepTitle: "Cook the Noodles",
            instructions: [
              "Boil 4 cups of water in a pan.",
              "Add a pinch of salt and a few drops of oil.",
              "Add the millet noodles and cook for 5–7 minutes or until soft.",
              "Drain and rinse under cold water to prevent sticking. Set aside."
            ]
          },
          {
            stepTitle: "Prepare the Vegetables",
            instructions: [
              "Heat 1 tbsp oil in a wok or large pan.",
              "Add minced garlic and green chili; sauté for a few seconds.",
              "Add onions, carrots, cabbage, and capsicum.",
              "Stir-fry on high flame for 2–3 minutes until slightly tender but still crisp."
            ]
          },
          {
            stepTitle: "Combine and Season",
            instructions: [
              "Add the cooked noodles to the pan with vegetables.",
              "Pour in soy sauce, vinegar, salt, and pepper.",
              "Toss everything together on medium flame for 2–3 minutes so the noodles absorb the flavors."
            ]
          },
          {
            stepTitle: "Serve and Enjoy",
            instructions: [
              "Garnish with spring onions or coriander.",
              "Serve hot and enjoy your tasty and healthy Millet Noodles!"
            ]
          }
        ]
      }
    },
    {
      name: "Finger Millet Murukku",
      color: "#f0f7f0",
      image: "https://www.sharmispassions.com/wp-content/uploads/2020/12/22553891811_81c4423d04_o.jpg",
      videoUrl: "https://www.youtube.com/embed/1cjh-iGQqfw?si=qpGdYIt7fbIWv2E5",
      recipe: {
        title: "Finger Millet Murukku",
        ingredients: [
          "1 cup Finger millet flour (ragi flour)",
          "1/2 cup Rice flour",
          "2 tbsp Gram flour (besan)",
          "1 tsp Sesame seeds or cumin seeds",
          "1 tbsp Butter or 1½ tbsp Oil",
          "A pinch of Asafoetida (hing)",
          "Salt to taste",
          "Water (as needed to make dough)",
          "Oil for deep frying"
        ],
        steps: [
          {
            stepTitle: "Prepare the Dough",
            instructions: [
              "In a mixing bowl, combine finger millet flour, rice flour, and gram flour.",
              "Add sesame seeds (or cumin seeds), asafoetida, butter (or oil), and salt to taste.",
              "Mix well with your hands until crumbly.",
              "Gradually add water and knead into a soft, smooth dough."
            ]
          },
          {
            stepTitle: "Shape the Murukku",
            instructions: [
              "Grease the murukku press and place the dough inside it.",
              "Use a star-shaped nozzle.",
              "Press the dough in circular shapes on small pieces of parchment paper or directly over hot oil."
            ]
          },
          {
            stepTitle: "Fry the Murukku",
            instructions: [
              "Heat oil in a deep frying pan on medium flame.",
              "Gently drop the shaped murukku into the oil.",
              "Fry until they turn crisp and golden brown on both sides.",
              "Remove and drain on paper towels."
            ]
          },
          {
            stepTitle: "Serve and Enjoy",
            instructions: [
              "Let them cool completely before storing.",
              "Store in an airtight container for up to 2 weeks.",
              "Enjoy your crunchy and healthy Finger Millet Murukku as a snack!"
            ]
          }
        ]
      }
    },
    {
      name: "Millet Snacks",
      color: "#fff5e6",
      image: "https://milletsforhealth.com/wp-content/uploads/2025/07/6.png"
    },
    {
      name: "Unpolished Millets",
      color: "#e6fff2",
      image: "https://milletsforhealth.com/wp-content/uploads/2025/07/9.png"
    },
    {
      name: "Millet Flours",
      color: "#f0f7f0",
      image: "https://milletsforhealth.com/wp-content/uploads/2025/07/3.png"
    },
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
            <NavLink
              to="/shop"
              className="btn btn-success px-4 py-2 rounded-pill fw-semibold"
              style={{ width: "150px" }}
            >
              Explore All
            </NavLink>
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
            style={{ width: "45px", height: "45px" }}
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
                      <div key={idx} className="col-6 col-sm-4 col-md-2 d-flex justify-content-center">
                        {/* Make each card clickable */}
                        <NavLink to={`/category/${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                          state={{
                            name: item.name,
                            image: item.image,
                            videoUrl: item.videoUrl,
                            recipe: item.recipe,
                            categories
                          }}
                          className="text-decoration-none"
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
                              className="d-flex justify-content-center align-items-center mx-auto mt-4"
                              style={{
                                width: "80px",
                                height: "80px",
                                // backgroundColor: "#fff",
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
                        </NavLink>
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
            style={{ width: "45px", height: "45px" }}
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
