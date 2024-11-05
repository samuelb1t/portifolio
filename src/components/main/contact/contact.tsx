import { FaGithub } from "react-icons/fa";
import Svg from "./linkedinSvg";
import { Form } from "./form";
import { useState } from "react";

function Contact() {
  const [onGithub, setonGithub] = useState(false);
  const [onLinkedin, setOnLinkedin] = useState(false);

  function toggleonGithub() {
    setonGithub(!onGithub);
  }

  function toggleOnLinkedin(){
    setOnLinkedin(!onLinkedin)
  }

  return (
    <section className=" grid">
      <div className="grid contact-columns items-center gap-4">
        <h1 className="text-neutral-200 text-5xl mb-4">
          Contato<span className="text-red-700 text-7xl leading-10">.</span>
        </h1>
        <span className="bg-neutral-200 w-full separator rounded-sm"></span>
        <a href="https://github.com/samuelb1t" target="_blank">
          <FaGithub
            className="w-10 h-10 duration-300"
            style={{ color: onGithub ? "#696969" : "#e5e5e5" }}
            onMouseEnter={toggleonGithub}
            onMouseLeave={toggleonGithub}
          />
        </a>
        <span className="bg-neutral-200 w-6 separator rounded-sm"></span>
        <a
          href="https://www.linkedin.com/in/samuel-bitdinger-140a7627b/"
          target="_blank"
          className="duration-300"
          style={{ color: onLinkedin ? "#696969" : "#e5e5e5" }}
        >
          <Svg hover={toggleOnLinkedin}/>
        </a>
      </div>
      <Form></Form>
    </section>
  );
}

export default Contact;
