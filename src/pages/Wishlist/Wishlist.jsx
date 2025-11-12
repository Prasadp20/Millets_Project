import React, { useState } from "react";
// import { MdClose } from "react-icons/md";

export default function Wishlist() {
    const [wishlist, setWishlist] = useState([
        {
            id: 1,
            name: "Amaranth Flour",
            price: 150,
            img: "https://via.placeholder.com/350x350?text=Amaranth+Flour"
        },
        {
            id: 2,
            name: "Bajra (Pearl Millet) Daliya",
            price: 100,
            img: "https://via.placeholder.com/350x350?text=Bajra+Daliya"
        },
        {
            id: 3,
            name: "Bajra Flour",
            price: 90,
            img: "https://via.placeholder.com/350x350?text=Bajra+Flour"
        }
    ]);

    const removeItem = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
    };

    return (
        <div className="container py-5">

            <h4 className="fw-bold mb-4">YOUR PRODUCTS WISHLIST</h4>

            {wishlist.length === 0 ? (
                /* ---------- EMPTY SCREEN ---------- */
                <div className="text-center p-5 border rounded-3">
                    <div style={{ fontSize: "120px", color: "#e4e4e4" }}>♡</div>
                    <h2 className="fw-bold mt-4">This wishlist is empty.</h2>
                    <p>You don't have any products in the wishlist yet.</p>
                    <button className="btn btn-success px-4 rounded-pill">RETURN TO SHOP</button>
                </div>
            ) : (
                /* ---------- GRID SECTION ---------- */
                <div className="row g-4">
                    {wishlist.map((item) => (
                        <div className="col-md-4 col-sm-6" key={item.id}>
                            <div className="card shadow-sm border-0 rounded-4">

                                {/* Remove Button */}
                                <button
                                    className="btn btn-link text-danger p-2 position-absolute"
                                    style={{ top: "5px", right: "8px" }}
                                    onClick={() => removeItem(item.id)}
                                >
                                    {/* <MdClose size={22} /> */}
                                </button>

                                <img src={item.img} alt={item.name} className="card-img-top p-3 rounded-4" />

                                <div className="card-body">
                                    <h6 className="card-title fw-semibold">{item.name}</h6>
                                    <p className="text-success fw-bold">₹{item.price}.00</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
