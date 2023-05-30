import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Store from "./store.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Store>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Store>
);
