import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DarkmodeToggle from "./components/DarkmodeToggle";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DarkmodeToggle />
        <App />
    </React.StrictMode>
);
