import React from "react";

export default function BottomSheetCart({ product }) {
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="cartSheet"   // <-- MUST MATCH data-bs-target
            aria-labelledby="cartSheetLabel"
            style={{ width: "370px" }}
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="cartSheetLabel">Shopping Cart</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>

            <div className="offcanvas-body">
                {product ? (
                    <>
                        <h6>✅ Product Added</h6>
                        <p><strong>{product.name}</strong></p>
                        <p>Price: ₹{product.price}</p>

                        <button className="btn btn-success w-100 mt-3">Checkout</button>
                    </>
                ) : (
                    <p>No product in cart yet.</p>
                )}
            </div>
        </div>
    );
}
