import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import { App } from "./components.js";

// ✅ WAIT until DOM is ready (fix your error)
window.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById("liquid-canvas");
  const ctx = canvas.getContext("2d");

  let width, height;
  let trails = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  window.addEventListener("mousemove", (e) => {
    trails.push({
      x: e.clientX,
      y: e.clientY,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 1
    });
  });

  function animate() {
    ctx.fillStyle = "rgba(11,15,42,0.08)";
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

  // React render
  createRoot(document.getElementById("root")).render(
    React.createElement(App)
  );
});
