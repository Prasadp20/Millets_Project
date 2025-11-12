// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import logo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/millet_mate.jpeg";
// import loginLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/user2.png";
// import cartLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/shopping-cart.png";
// import BottomSheetCart from "../../pages/Cart/BottomSheetCart";



// export default function Navbar() {
//     const navigate = useNavigate();

//     const handleLoginClick = () => {
//         navigate("/login"); // navigate to login page
//     };

//     const [selectedProduct, setSelectedProduct] = useState(null);

//     function handleCartClick(product) {
//         setSelectedProduct(product);
//     }

//     return (
//         <>
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
//                 <div className="container">
//                     {/* Brand Logo */}
//                     <NavLink className="navbar-brand" to="/">
//                         <img
//                             src={logo}
//                             alt="Millet_Mate"
//                             height="80"
//                         />
//                     </NavLink>

//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarNav"
//                         aria-controls="navbarNav"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     {/* Navbar Items */}
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <div className="d-flex align-items-center justify-content-end w-100 gap-4">
//                             {/* Navigation Links */}
//                             <ul className="navbar-nav d-flex align-items-center mb-0">
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link mx-2" to="/">Home</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link mx-2" to="/about">About Us</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link mx-2" to="/shop">Products</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link mx-2" to="/blogs">Blogs</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink className="nav-link mx-2" to="/contactus">Contact Us</NavLink>
//                                 </li>
//                             </ul>

//                             {/* Search Box */}
//                             <form className="d-flex align-items-center" role="search" style={{ minWidth: "250px" }}>
//                                 <input
//                                     className="form-control me-2"
//                                     type="search"
//                                     placeholder="Search for products"
//                                     aria-label="Search"
//                                 />
//                                 <button className="btn btn-outline-success" type="submit">
//                                     Search
//                                 </button>
//                             </form>

//                             {/* User Icon */}
//                             <img
//                                 src={loginLogo}
//                                 alt="User Logo"
//                                 style={{ width: "24px", cursor: "pointer" }}
//                                 data-bs-toggle="offcanvas"
//                                 data-bs-target="#loginSheet"
//                                 onClick={handleLoginClick}
//                                 title="Login"
//                             />

//                             {/* Shopping Cart Icon */}
//                             <img
//                                 src={cartLogo}
//                                 alt="Shopping Cart Logo"
//                                 style={{ width: "24px", cursor: "pointer" }}
//                                 data-bs-toggle="offcanvas"
//                                 data-bs-target="#cartSheet"
//                                 onClick={() => handleCartClick({ name: "Millet Pack", price: 120 })}
//                                 title="Cart"
//                             />

//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Bottom Sheet Component */}
//             <BottomSheetCart product={selectedProduct} />
//         </>
//     );
// }


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/millet_mate.jpeg";
import loginLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/user2.png";
import cartLogo from "/home/prasad-pathak/Documents/ReactJs/Millets_Project/src/assets/shopping-cart.png";
import BottomSheetCart from "../../pages/Cart/BottomSheetCart";
import LoginBottomSheet from "../../pages/Login/LoginBottomSheet";

export default function Navbar() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    function handleCartClick(product) {
        setSelectedProduct(product);
    }

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    {/* Brand Logo */}
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt="Millet_Mate"
                            height="80"
                        />
                    </NavLink>

                    {/* Navbar Toggle (Mobile) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links & Actions */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="d-flex align-items-center justify-content-end w-100 gap-4">
                            {/* Links */}
                            <ul className="navbar-nav d-flex align-items-center mb-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/shop">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/blogs">Blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/contactus">Contact Us</NavLink>
                                </li>
                            </ul>

                            {/* Search Box */}
                            <form className="d-flex align-items-center" role="search" style={{ minWidth: "250px" }}>
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search for products"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>

                            {/* User Icon → opens login bottom sheet */}
                            <img
                                src={loginLogo}
                                alt="User Logo"
                                style={{ width: "26px", cursor: "pointer" }}
                                data-bs-toggle="offcanvas"
                                data-bs-target="#loginSheet" // <-- Must match BottomSheetLogin id
                                title="Login"
                            />

                            {/* Cart Icon → opens cart bottom sheet */}
                            <img
                                src={cartLogo}
                                alt="Shopping Cart Logo"
                                style={{ width: "26px", cursor: "pointer" }}
                                data-bs-toggle="offcanvas"
                                data-bs-target="#cartSheet" // <-- Must match BottomSheetCart id
                                onClick={() => handleCartClick({ name: "Millet Pack", price: 120 })}
                                title="Cart"
                            />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Bottom Sheets */}
            <BottomSheetCart product={selectedProduct} />
            <LoginBottomSheet />  {/* <-- added login bottom sheet */}
        </>
    );
}
