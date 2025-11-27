import React from "react";
// import phoneLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/phone.png";
// import mailLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/mail.png";
// import socialLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/group-users.png";
// import LocationLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/maps-and-flags.png";

import phoneLogo from "D:/ReactJs/Millets_Project/src/assets/phone.png";
import mailLogo from "D:/ReactJs/Millets_Project/src/assets/mail.png";
import socialLogo from "D:/ReactJs/Millets_Project/src/assets/group-users.png";
import LocationLogo from "D:/ReactJs/Millets_Project/src/assets/maps-and-flags.png";

export default function ContactUs() {
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
                    <h1 className="fw-bold mb-3">Contact Us</h1>
                    <p>Home / Contact Us</p>
                </div>
            </div>

            {/* Contact Us Block */}
            <div className="container my-5">
                <div className="row text-center">

                    {/* Call Us */}
                    <div className="col d-flex flex-column align-items-center text-center bg-white rounded-4 p-4 m-2 shadow p-3 position-relative">
                        <div
                            className="rounded-circle d-flex justify-content-center align-items-center position-absolute"
                            style={{
                                top: "-25px",
                                backgroundColor: "#13854E",
                                width: "50px",
                                height: "50px",
                            }}
                        >
                            <img src={phoneLogo} alt="Call Us Logo" style={{ width: "30px" }} />
                        </div>
                        <h5 className="fw-bold mt-4">Call us</h5>
                        <p className="mt-2 mb-0">+91 - 9212791110</p>
                        <p className="mb-0">+ 0120 4574825</p>
                    </div>

                    {/* Mail Us */}run dev
                    <div className="col d-flex flex-column align-items-center text-center bg-white rounded-4 p-4 m-2 shadow p-3 position-relative">
                        <div
                            className="rounded-circle d-flex justify-content-center align-items-center position-absolute"
                            style={{
                                top: "-25px",
                                backgroundColor: "#13854E",
                                width: "50px",
                                height: "50px",
                            }}
                        >
                            <img src={mailLogo} alt="Mail Us Logo" style={{ width: "30px" }} />
                        </div>
                        <h5 className="fw-bold mt-4">Mail Us</h5>
                        <p className="mt-2 mb-0">hello@milletsforhealth.com</p>
                    </div>

                    {/* Social Profile */}
                    <div className="col d-flex flex-column align-items-center text-center bg-white rounded-4 p-4 m-2 shadow p-3 position-relative">
                        <div
                            className="rounded-circle d-flex justify-content-center align-items-center position-absolute"
                            style={{
                                top: "-25px",
                                backgroundColor: "#13854E",
                                width: "50px",
                                height: "50px",
                            }}
                        >
                            <img src={socialLogo} alt="Social Logo" style={{ width: "30px" }} />
                        </div>
                        <h5 className="fw-bold mt-4">Social Profile</h5>
                        <div className="mt-2">
                            <a href="#" className="text-success fs-5 mx-2">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-success fs-5 mx-2">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="text-success fs-5 mx-2">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="text-success fs-5 mx-2">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="col d-flex flex-column align-items-center text-center bg-white rounded-4 p-4 m-2 shadow p-3 position-relative">
                        <div
                            className="rounded-circle d-flex justify-content-center align-items-center position-absolute"
                            style={{
                                top: "-25px",
                                backgroundColor: "#13854E",
                                width: "50px",
                                height: "50px",
                            }}
                        >
                            <img src={LocationLogo} alt="Location Logo" style={{ width: "30px" }} />
                        </div>
                        <h5 className="fw-bold mt-4">Location</h5>
                        <p className="mt-2 mb-0">
                            Millets for Health, C 22/16, SF, Block C, Sector 57,<br />
                            Noida, Uttar Pradesh 201301
                        </p>
                    </div>
                </div>
            </div>

            {/* Enquiry Form */}
            <div className="container my-5 d-flex justify-content-center">
                <div className="col-lg-10 col-md-11 col-sm-12 shadow p-5 bg-white rounded-4">
                    <h2 className="text-center fw-bold mb-4">Enquire Now</h2>

                    <form>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label fw-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="contact" className="form-label fw-semibold">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contact"
                                    placeholder="Enter contact number"
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label fw-semibold">
                                Sub
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Enter subject"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="form-label fw-semibold">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="6"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-success px-4 py-2 rounded-pill fw-semibold"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Google Map */}
            <div className="my-5 d-flex justify-content-center">
                <iframe
                    title="Millets for Health Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.442198289634!2d77.36725557549667!3d28.556256075710097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce558ac48b3a7%3A0x85d3efea8ad9f046!2sMillets%20For%20Health!5e0!3m2!1sen!2sin!4v1735183200000!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                ></iframe>
            </div>
        </>
    );
}