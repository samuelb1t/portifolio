import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Bg from "./components/background";
import Header from "./components/main/header"
import About from "./components/main/about"
import Studies from "./components/main/estudos"



createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Bg>
            <div>
                <Header></Header>
                <About></About>
            </div>
        </Bg>
        <Bg>
            <div>
                <Header></Header>
                <Studies></Studies>
            </div>
        </Bg>
    </StrictMode>
  );
