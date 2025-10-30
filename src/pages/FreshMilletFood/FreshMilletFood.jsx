import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function FreshMilletFood() {

    const navigate = useNavigate();
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
                    <p>
                        <NavLink to="/" className="text-decoration-none text-white fw-semibold">
                            Home
                        </NavLink>
                        {" / "} Fresh Millet Food
                    </p>
                </div>
            </div >


            {/* <div className="row justify-content-center my-5 mx-5">
                <div className="col-md-4 mb-4 d-flex p-3">
                    <div className="card flex-fill h-80">
                        <img src="https://milletsforhealth.com/wp-content/uploads/2025/07/e62293795c-Opening-1-1-Picsart-AiImageEnhancer-1200x1200.png" className="card-img-top p-3" alt="Healthy Gut" />
                        <div className="card-body">
                            <p>
                                Cafe Milletam, NOIDA Direct Order: https://wa.me/c/919211879842 or call on 9211879842
                                To order from Zomato: https://zomato.onelink.me/xqzv/rnsdzh55
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 d-flex p-3">
                    <div className="card flex-fill h-80">
                        <img src="https://milletsforhealth.com/wp-content/uploads/2025/10/image.png" className="card-img-top p-3" alt="Little Millet Idlis" />
                        <div className="card-body">
                            <p>
                                Millets Experience Centre, Dilli Haat, INA Direct Order: https://wa.me/c/919821623362 or call on 9821623362
                                To order from Zomato: https://zomato.onelink.me/xqzv/f3uioykg
                                To order from Swiggy: https://www.swiggy.com/menu/761175
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 d-flex p-3">
                    <div className="card flex-fill h-80">
                        <img src="https://milletsforhealth.com/wp-content/uploads/2025/10/Blue-and-Yellow-Modern-Catering-Services-Instagram-Post-1.jpg" className="card-img-top p-3" alt="Proso Millet Faara" />
                        <div className="card-body">
                            <p>
                                Planning a birthday party, pooja, kitty party, or family get-together? 🎊
                                Serve something different – and healthier!
                                Contact us to discuss your event needs! 9212791110
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="row justify-content-center my-5 mx-5">
                {/* Card 1 */}
                <div className="col-md-4 mb-4 d-flex p-3">
                    <div className="card flex-fill h-80">
                        <img
                            src="https://milletsforhealth.com/wp-content/uploads/2025/07/e62293795c-Opening-1-1-Picsart-AiImageEnhancer-1200x1200.png"
                            className="card-img-top p-3"
                            alt="Healthy Gut"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/whatsappcatalog")}
                        />
                        <div className="card-body">
                            <p>
                                Cafe Milletam, NOIDA Direct Order:{" "}
                                <a href="https://wa.me/c/919211879842" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>{" "}
                                or call on 9211879842
                                <br />
                                To order from Zomato:{" "}
                                <a href="https://zomato.onelink.me/xqzv/rnsdzh55" target="_blank" rel="noopener noreferrer">
                                    Zomato
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4 d-flex p-3">
                    <div className="card flex-fill h-80">
                        <img
                            src="https://milletsforhealth.com/wp-content/uploads/2025/10/image.png"
                            className="card-img-top p-3"
                            alt="Little Millet Idlis"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/whatsappcatalog")}
                        />
                        <div className="card-body">
                            <p>
                                Millets Experience Centre, Dilli Haat, INA Direct Order:{" "}
                                <a href="https://wa.me/c/919821623362" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>{" "}
                                or call on 9821623362
                                <br />
                                To order from Zomato:{" "}
                                <a href="https://zomato.onelink.me/xqzv/f3uioykg" target="_blank" rel="noopener noreferrer">
                                    Zomato
                                </a>
                                <br />
                                To order from Swiggy:{" "}
                                <a href="https://www.swiggy.com/menu/761175" target="_blank" rel="noopener noreferrer">
                                    Swiggy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mb-4 d-flex p-3">
                    <div className="card flex-fill h-80">
                        <img
                            src="https://milletsforhealth.com/wp-content/uploads/2025/10/Blue-and-Yellow-Modern-Catering-Services-Instagram-Post-1.jpg"
                            className="card-img-top p-3"
                            alt="Proso Millet Faara"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/whatsappcatalog")}
                        />
                        <div className="card-body">
                            <p>
                                Planning a birthday party, pooja, kitty party, or family get-together? 🎊
                                Serve something different – and healthier!
                                <br />
                                Contact us to discuss your event needs! 9212791110
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

