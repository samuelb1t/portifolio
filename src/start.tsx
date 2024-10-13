import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Bg from "./components/background";
import App from "./components/start/app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Bg>
      <App></App>
    </Bg>
  </StrictMode>
);
