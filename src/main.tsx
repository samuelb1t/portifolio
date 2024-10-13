import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Bg from "./components/background";
import Header from "./components/main/header"


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Bg>
            <div></div>
        </Bg>
    </StrictMode>
  );