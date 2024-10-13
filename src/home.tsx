import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Bg from "./components/background";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Bg>
            <div></div>
        </Bg>
    </StrictMode>
  );