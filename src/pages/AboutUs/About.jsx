import React from "react";
// import missionLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/mission.png";
// import visionLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/sight.png";

import missionLogo from "D:/ReactJs/Millets_Project/src/assets/mission.png";
import visionLogo from "D:/ReactJs/Millets_Project/src/assets/sight.png";


export default function About() {

    const personInfo = [
        {
            image: "https://healthymillets.in/wp-content/uploads/2018/12/drkhader2.jpg",
            name: "Dr. Khader Vali",
            profession: "Independent forest agricultural scientist & food expert",
            desc: "Dr. Khadar Vali has brought forth the eternal truth behind keeping good health by doing intensive research for many years (towards finding a lasting solution for many modern illnesses) after being deeply disturbed by the cause of modern illnesses and resolving to find lasting solutions for them."
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Dr._B._Dayakar_Rao_-_Photo.jpg",
            name: "Dr. Dayakar Rao B",
            profession: "Discipline: Agrl. Economics | Designation: Principal Scientist | At IIMR Since: 1993",
            desc: "Building successful millet value chain ecosystem with end-to-end solutions for creating demand for millets in the states of Karnataka, Telangana, Andhra Pradesh and supporting the governments of Rajasthan, Madhya Pradesh, Chhattisgarh, and Uttarakhand in replicating the successful millet value chain to boost the millet cultivation and promotion in these states. Creating forward and backward linkages in millets through involvement of multi stakeholdersin millet ecosystem and sharing the expertise in processing and value addition of millets for the benefit of farmers, FPOs and SHGs."
        },
        {
            image: "https://mithaahara.com/wp-content/uploads/2025/02/4.jpg",
            name: "Ms. Sreemathy Venkatraman",
            profession: "Founder - Mitha Aahara | Our USP is Healing with Food",
            desc: "Sreemathy is a Bangalore based Qualified Clinical dietitian and Wellness Nutritionist. She has a vast clinical experience of 23 years and has specialised in “Diet in Health & Disease ” from USA. She works on all gut health issues including IBS, food intolerances, IBD like Crohn’s & Ulcerative colitis. Our USP is “Healing with Food”. She also deals with PCOS, Food intolerances, Food Allergies, Brain Health, Metabolic dysfunctions like obesity, Diabetes, Hypertension and also conditions like fatty liver disease, infertility, mental health like depression and anxiety, autoimmune conditions, skin diseases, GDM and several other neuro conditions like Parkinson’s, ALS and swallowing difficulties and tube feeding."
        }
    ];

    return (
        <>
            {/* Top Banner Section */}
            <div
                className="container-fluid d-flex justify-content-center align-items-center text-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://prakati.in/wp-content/uploads/2023/04/millets2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    height: "30vh",
                    color: "white",
                }}
            >
                <div className="p-5 rounded-4 w-100" style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <h1 className="fw-bold mb-3">About Us</h1>
                    <p>Home / About Us</p>
                </div>
            </div>

            {/* About Section */}
            <div className="container py-5 my-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
                        <img
                            src="https://cdn.pixabay.com/photo/2021/05/06/08/50/food-6232920_1280.jpg"
                            alt="Millet varieties on spoons"
                            className="img-fluid rounded-4"
                            style={{ maxHeight: "420px", objectFit: "contain", width: "100%" }}
                        />
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="fw-bold mb-3 text-dark" style={{ fontSize: "2.3rem", lineHeight: "1.15" }}>
                            Millets for Health – Reviving Ancient<br />Grains for Modern Wellness
                        </h2>
                        <p className="mb-2 text-dark" style={{ fontSize: "1.1rem", color: "#757575" }}>
                            Millets for Health is born out of a journey of personal health and transformation and has grown into a social enterprise working on the revival of millets, the ancient Indian Super Foods.
                        </p>
                        <p className="text-dark" style={{ fontSize: "1.1rem", color: "#757575" }}>
                            The journey of our work is more than a decade long and started in rural Ananthapur, the second most drought prone region in the country. Our partner NGO SHODH works with farmers from the region to support the cause of millet farming. While other crops fail in the agro climatic scenario of this region, Millets survive and thrive, making them the ideal solution. Millets for health was set up in 2016 to market the products of these marginalised and small holder farmers after one of our co-founders transformed her own health by going on a millet based diet.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission + Vision */}
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-5 rounded-4 p-5 m-3 text-dark d-flex flex-column justify-content-center align-items-center text-center shadow-sm"
                        style={{ backgroundColor: "#C8FADA", minHeight: "265px" }}>
                        <img src={missionLogo} alt="Mission Logo" style={{ width: "50px" }} />
                        <h3 className="fw-bold mt-3">Mission</h3>
                        <p className="mt-2" style={{ fontSize: "1.05rem" }}>
                            Our mission is to revive ancient millets by promoting healthy, sustainable food choices while supporting small farmers through ethical sourcing, local partnerships, and mindful nutrition.
                        </p>
                    </div>

                    <div className="col-md-5 rounded-4 p-5 m-3 text-dark d-flex flex-column justify-content-center align-items-center text-center shadow-sm"
                        style={{ backgroundColor: "#FFEDD2", minHeight: "265px" }}>
                        <img src={visionLogo} alt="Vision Logo" style={{ width: "50px" }} />
                        <h3 className="fw-bold mt-3">Vision</h3>
                        <p className="mt-2" style={{ fontSize: "1.05rem" }}>
                            Our vision is to create a healthier future by making millets a staple in every home, fostering sustainable farming, and empowering rural communities across India.
                        </p>
                    </div>
                </div>
            </div>

            {/* Profiles Rendering Dynamic */}
            <div className="container py-5">
                {personInfo.map((person, index) => (
                    <div key={index}>
                        <div className={`row align-items-center my-5 ${index % 2 !== 0 ? "flex-md-row-reverse" : ""}`}>
                            <div className="col-md-2 text-center mb-4 mb-md-0">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="img-fluid rounded"
                                    style={{ height: "250px", width: "100%", objectFit: "cover" }}
                                />
                            </div>

                            <div className="col-md-10">
                                <h4 className="fw-bold mb-1 text-dark">{person.name}</h4>
                                <div className="mb-2 text-dark"><em>{person.profession}</em></div>
                                <p className="mb-0 text-dark">{person.desc}</p>
                            </div>
                        </div>

                        {index !== personInfo.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </>
    );
}
