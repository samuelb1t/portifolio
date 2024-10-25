import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./appRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <AppRoutes></AppRoutes>
    </div>
  </StrictMode> 
);

let isScrolling = false;

document.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    console.log(e.deltaY);
    if (isScrolling) return;
    isScrolling = true;
    const vh = window.innerHeight;
    const direction = Math.sign(e.deltaY);
    const currentPosition = window.scrollY;
    const nextPosition = currentPosition + vh * direction;
    window.scrollTo({
      top: nextPosition,
      behavior: "smooth",
    });
    setTimeout(() => {
      isScrolling = false;
    }, 1350);
  },
  { passive: false }
);
