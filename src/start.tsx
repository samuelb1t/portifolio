import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/appRoutes";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <AppRoutes></AppRoutes>
    </div>
  </StrictMode>
);
