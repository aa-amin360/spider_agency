import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import { App } from "./components.js";

const canvas = document.getElementById("ripple-canvas");
const ctx = canvas.getContext("2d");

let width, height;
let ripples = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// Create ripple
window.addEventListener("mousemove", (e) => {
  ripples.push({
    x: e.clientX,
    y: e.clientY,
    radius: 0,
    alpha: 0.5
  });
});

// Animate ripples
function animate() {
  ctx.clearRect(0, 0, width, height);

  ripples.forEach((r, i) => {
    r.radius += 2;
    r.alpha *= 0.96;

    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(124,58,237,${r.alpha})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    if (r.alpha < 0.01) ripples.splice(i, 1);
  });

  requestAnimationFrame(animate);
}
animate();

createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
