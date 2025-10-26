import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function About() {
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
                <div
                    className="p-5 rounded-4 w-100"
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                    }}
                >
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
                            style={{
                                maxHeight: "420px",
                                objectFit: "contain",
                                width: "100%"
                            }}
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

            <div className="container my-5">
                <div className="row justify-content-center">
                    {/* Mission Box */}
                    <div
                        className="col-md-5 rounded-4 p-5 m-3 text-dark d-flex flex-column justify-content-center align-items-center text-center shadow-sm"
                        style={{
                            backgroundColor: "#C8FADA",
                            minHeight: "265px",
                        }}
                    >
                        {/* Logo Above Icon */}
                        <img
                            src="src/assets/mission.png" // <-- Update path to your Mission logo
                            alt="Mission Logo"
                            style={{ width: "50px" }}
                        />
                        {/* <i className="bi bi-bullseye" style={{ fontSize: "2.5rem", color: "#00A86B" }}></i> */}
                        <h3 className="fw-bold mt-3">Mission</h3>
                        <p className="mt-2" style={{ fontSize: "1.05rem" }}>
                            Our mission is to revive ancient millets by promoting healthy, sustainable food choices while supporting small farmers through ethical sourcing, local partnerships, and mindful nutrition.
                        </p>
                    </div>

                    {/* Vision Box */}
                    <div
                        className="col-md-5 rounded-4 p-5 m-3 text-dark d-flex flex-column justify-content-center align-items-center text-center shadow-sm"
                        style={{
                            backgroundColor: "#FFEDD2",
                            minHeight: "265px",
                        }}
                    >
                        {/* Logo Above Icon */}
                        <img
                            src="src/assets/sight.png" // <-- Update path to your Vision logo
                            alt="Vision Logo"
                            style={{ width: "50px" }}
                        />
                        {/* <i className="bi bi-people-fill" style={{ fontSize: "2.5rem", color: "#F4B000" }}></i> */}
                        <h3 className="fw-bold mt-3">Vision</h3>
                        <p className="mt-2" style={{ fontSize: "1.05rem" }}>
                            Our vision is to create a healthier future by making millets a staple in every home, fostering sustainable farming, and empowering rural communities across India.
                        </p>
                    </div>
                </div>
            </div>


            <div className="container py-5">

                {/* First Profile */}
                <div className="row align-items-center mb-5 my-5">
                    <div className="col-md-2 text-center mb-4 mb-md-0">
                        <img
                            src="https://healthymillets.in/wp-content/uploads/2018/12/drkhader2.jpg" // Update with your image path or use import
                            alt="Pallavi Upadhyaya"
                            className="img-fluid rounded"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-10">
                        <h4 className="fw-bold mb-1 text-dark">Dr. Khader Vali</h4>
                        <div className="mb-2 text-dark"><em>Independent forest agricultural scientis &amp; food expert</em></div>
                        <p className="mb-0 text-dark">
                            Dr. Khadar Vali has brought forth the eternal truth behind keeping good health by doing intensive research
                            for many years (towards finding a lasting solution for many modern illnesses) after being deeply disturbed
                            by the cause of modern illnesses and resolving to find lasting solutions for them.
                        </p>
                    </div>
                </div>
                <hr />

                {/* Second Profile */}
                <div className="row align-items-center flex-md-row-reverse my-5">
                    <div className="col-md-2 text-center mb-4 mb-md-0">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Dr._B._Dayakar_Rao_-_Photo.jpg" // Update with your image path or use import
                            alt="Rajeev Pandey"
                            className="img-fluid rounded"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-10">
                        <h4 className="fw-bold mb-1 text-dark">Dr. Dayakar Rao B</h4>
                        <div className="mb-2 text-dark"><em>Discipline: Agrl. Economics | Designation: Principal Scientist | At IIMR Since: 1993</em></div>
                        <p className="mb-0 text-dark">
                            Building successful millet value chain ecosystem with end-to-end solutions for creating demand for millets in the
                            states of Karnataka, Telangana, Andhra Pradesh and supporting the governments of Rajasthan, Madhya Pradesh,
                            Chhattisgarh, and Uttarakhand in replicating the successful millet value chain to boost the millet cultivation and
                            promotion in these states.
                        </p>
                        <p className="mb-0 text-dark">
                            Creating forward and backward linkages in millets through involvement of multi
                            stakeholdersin millet ecosystem and sharing the expertise in processing and value addition of millets for the
                            benefit of farmers, FPOs and SHGs.
                        </p>
                    </div>
                </div>
                <hr />

                {/* Third Profile */}
                <div className="row align-items-center mb-5 my-5">
                    <div className="col-md-2 text-center mb-4 mb-md-0">
                        <img
                            src="https://mithaahara.com/wp-content/uploads/2025/02/4.jpg" // Update with your image path or use import
                            alt="Pallavi Upadhyaya"
                            className="img-fluid rounded"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-10">
                        <h4 className="fw-bold mb-1 text-dark">Ms. Sreemathy Venkatraman</h4>
                        <div className="mb-2 text-dark"><em>Founder- Mitha Aahara &amp; Our USP is Healing with food</em></div>
                        <p className="mb-0 text-dark">
                            Sreemathy is a Bangalore based Qualified Clinical dietitian and Wellness Nutritionist. She has a vast clinical
                            experience of 23 years and has specialised in “Diet in Health & Disease ” from USA.
                        </p>
                        <p className="mb-0 text-dark">
                            She works on all gut health issues including IBS, food intolerances, IBD like Crohn’s & Ulcerative colitis. Our USP is “Healing with Food”.
                            She also deals with PCOS, Food intolerances, Food Allergies, Brain Health, Metabolic dysfunctions like obesity,
                            Diabetes, Hypertension and also conditions like fatty liver disease, infertility, mental health like depression
                            and anxiety, autoimmune conditions, skin diseases, GDM and several other neuro conditions like Parkinson’s,
                            ALS and swallowing difficulties and tube feeding.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}
