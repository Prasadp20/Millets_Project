// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter basename="Millets_Project">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/AppContext";  // ✔ Import provider
import { AlertProvider } from "./context/AlertContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="Millets_Project">
      <AppProvider>       {/* ✔ Wrap here */}
        <AlertProvider>
          <App />
        </AlertProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
