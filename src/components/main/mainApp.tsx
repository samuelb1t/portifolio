import Bg from "../background";
import Header from "./header";
import About from "./about/about";
import Studies from "./studies/studies";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

function mainApp() {
  return (
    <div>
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
    </div>
  );
}

export default mainApp;
