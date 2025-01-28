import React from "react";
import ReactDOM from "react-dom/client"; // Import the createRoot API
import App from "./App";

// Create a root for rendering the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(<App />);
