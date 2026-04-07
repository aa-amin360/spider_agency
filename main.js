import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import { App } from "./components.js";

const canvas = document.getElementById("liquid-canvas");
const ctx = canvas.getContext("2d");

let width, height;
let trails = [];
let mouse = { x: 0, y: 0 };

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  trails.push({
    x: mouse.x,
    y: mouse.y,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    life: 1
  });
});

// Animate
function animate() {
  ctx.fillStyle = "rgba(11,15,42,0.1)";
  ctx.fillRect(0, 0, width, height);

  trails.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life *= 0.96;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 40 * p.life, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(124,58,237,${p.life})`;
    ctx.fill();

    if (p.life < 0.05) trails.splice(i, 1);
  });

  requestAnimationFrame(animate);
}
animate();

createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
