import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import './styles/animations.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Remove preload class after initial render
window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
