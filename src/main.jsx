import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 1000,      // Animation duration
  once: true,          // Animate only once
  easing: "ease-in-out",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);