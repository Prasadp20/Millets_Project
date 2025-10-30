import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Blogs() {
    const [filter, setFilter] = useState("All");

    const blogs = [
        {
            title: "Author Connect",
            image: "https://milletsforhealth.com/wp-content/uploads/2025/08/imgi_2_WhatsApp_Image_2023-02-09_at_12_43_12_PM.jpg",
            category: "Event",
            desc: "On the occasion of the International Year of Millets, #IYM2023, Publications Division brings to you our new way to engage with our authors and readers, #Authorsconnect, the first...",
        },
        {
            title: "Healthy Recipes",
            image: "https://milletsforhealth.com/wp-content/uploads/2025/08/imgi_2_WhatsApp_Image_2023-02-04_at_6_01_55_PM.jpg",
            category: "Event",
            desc: "Discover nutritious millet-based recipes that are easy to prepare and packed with health benefits for every meal of the day.",
        },
        {
            title: "A Healthy You Starts with a Healthy Gut: The Role of Millets in Gut Health",
            image: "https://milletsforhealth.com/wp-content/uploads/2025/07/145602.jpg",
            category: "Blog",
            desc: "It's an ancient truth gaining modern scientific backing: your gut is incredibly central to your overall well-being. Far from just digesting food, your gut, with its teeming community...",
        },
        {
            title: "A Healthy You Starts with a Healthy Gut: The Role of Millets in Gut Health",
            image: "https://milletsforhealth.com/wp-content/uploads/2025/07/145602.jpg",
            category: "Blog",
            desc: "It's an ancient truth gaining modern scientific backing: your gut is incredibly central to your overall well-being. Far from just digesting food, your gut, with its teeming community...",
        },
        {
            title: "A Healthy You Starts with a Healthy Gut: The Role of Millets in Gut Health",
            image: "https://milletsforhealth.com/wp-content/uploads/2025/07/145602.jpg",
            category: "Blog",
            desc: "It's an ancient truth gaining modern scientific backing: your gut is incredibly central to your overall well-being. Far from just digesting food, your gut, with its teeming community...",
        },
        {
            title: "A Healthy You Starts with a Healthy Gut: The Role of Millets in Gut Health",
            image: "https://milletsforhealth.com/wp-content/uploads/2025/07/145602.jpg",
            category: "Blog",
            desc: "It's an ancient truth gaining modern scientific backing: your gut is incredibly central to your overall well-being. Far from just digesting food, your gut, with its teeming community...",
        },
    ];

    const filteredBlogs =
        filter === "All" ? blogs : blogs.filter((b) => b.category === filter);

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
                    style={{ maxWidth: "700px", margin: "0 auto" }}
                >
                    <h1 className="fw-bold mb-3">Blogs</h1>
                    <p>Home / Blogs</p>
                </div>
            </div>

            {/* Blog Section */}
            <div className="container my-5">
                {/* Filter Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-semibold">Latest Posts</h3>

                    <div className="d-flex align-items-center">
                        <label htmlFor="categoryFilter" className="me-2 fw-semibold">
                            Filter by:
                        </label>
                        <select
                            id="categoryFilter"
                            className="form-select"
                            style={{ width: "180px" }}
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Event">Event</option>
                            <option value="Blog">Blog</option>
                        </select>
                    </div>
                </div>

                {/* Blog Cards */}
                <div className="row justify-content-center g-4">
                    {filteredBlogs.map((blog, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center"
                        >
                            <div
                                className="card shadow-sm border-0 rounded-4 text-center h-100 position-relative"
                                style={{ maxWidth: "20rem" }}
                            >
                                <div className="position-relative">
                                    <img
                                        src={blog.image}
                                        className="card-img-top rounded-top-4"
                                        alt={blog.title}
                                    />
                                    <span
                                        className="badge text-bg-success position-absolute top-100 start-50 translate-middle"
                                        style={{
                                            fontSize: "0.75rem",
                                            padding: "0.4em 0.6em",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        {blog.category}
                                    </span>
                                </div>

                                <div className="card-body text-center">
                                    <h5 className="card-title fw-semibold">{blog.title}</h5>
                                    <p className="text-body-tertiary mb-1">
                                        Posted by{" "}
                                        <img
                                            src="src/assets/user.png"
                                            alt="User Icon"
                                            style={{
                                                width: "17px",
                                                height: "17px",
                                                margin: "0 6px",
                                                verticalAlign: "middle",
                                            }}
                                        />
                                        Millets for Health
                                    </p>
                                    <p className="card-text text-muted">{blog.desc}</p>
                                    <p>
                                        <NavLink
                                            to="/blogDetail"
                                            className="link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover fw-semibold"
                                        >
                                            CONTINUE READING
                                        </NavLink>
                                    </p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
