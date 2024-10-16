import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Bg from "./components/background";
import Header from "./components/main/header"
import About from "./components/main/about"
import Studies from "./components/main/estudos"
import Projects from "./components/main/projects";
import Contact from "./components/main/contact";

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
        <Bg>
            <div>
                <Header></Header>
                <Projects></Projects>
            </div>
        </Bg>
        <Bg>
            <div>
                <Header></Header>
                <Contact></Contact>
            </div>
        </Bg>
    </StrictMode>
  );


