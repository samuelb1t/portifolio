import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Bg from "./components/background";
import Header from "./components/main/header"
import About from "./components/main/about"
import Studies from "./components/main/studies"
import Projects from "./components/main/projects";
import Contact from "./components/main/contact";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Bg id="about">
            <div className="sections">
                <Header></Header>
                <About></About>
            </div>
        </Bg>
        <Bg id="studies">
            <div className="sections">
                <Header></Header>
                <Studies></Studies>
            </div>
        </Bg>
        <Bg id="projects">
            <div className="sections">
                <Header></Header>
                <Projects></Projects>
            </div>
        </Bg>
        <Bg id="contact">
            <div className="sections">
                <Header></Header>
                <Contact></Contact>
            </div>
        </Bg>
    </StrictMode>
  );

let isScrolling = false;

document.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (isScrolling) return;  
    isScrolling = true;  

    const vh = window.innerHeight;
    const direction = Math.sign(e.deltaY);
    const currentPosition = window.scrollY;
    const nextPosition = currentPosition + (vh * direction);
    window.scrollTo({
        top: nextPosition,
        behavior: "smooth",
    });
    setTimeout(()=>{isScrolling = false;},1350)
},{passive:false});


