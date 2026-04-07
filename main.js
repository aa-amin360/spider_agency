import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import { App } from "./components.js";

// Create cursor glow
const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
