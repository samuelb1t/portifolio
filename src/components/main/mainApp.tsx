import Bg from "../background";
import Header from "./header";
import About from "./about/about";
import Studies from "./studies/studies";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

function mainApp() {
  let isScrolling = false;

  document.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
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

  return (
    <div className="dark">
      <Bg id="about">
        <div className="sections">
          <Header menuId="1"></Header>
          <About></About>
        </div>
      </Bg>
      <Bg id="studies">
        <div className="sections">
          <Header menuId="2"></Header>
          <Studies></Studies>
        </div>
      </Bg>
      <Bg id="projects">
        <div className="sections">
          <Header menuId="3"></Header>
          <Projects></Projects>
        </div>
      </Bg>
      <Bg id="contact">
        <div className="sections">
          <Header menuId="4"></Header>
          <Contact></Contact>
        </div>
      </Bg>
    </div>
  );
}

export default mainApp;
