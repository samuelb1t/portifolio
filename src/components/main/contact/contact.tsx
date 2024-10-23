import { FaGithub } from "react-icons/fa";
import Svg from "./linkedinSvg";
import { IoMdCode } from "react-icons/io";
import Input from "./input";
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
    <section className="mt-8 grid">
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
      <form
        className="grid gap-4 input-width justify-self-center mt-12"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="31315395-dc2f-453c-9ec7-683cc43d0476"
        />
        <Input type="text" name="name" placeholder="Name"></Input>
        <Input type="email" name="email" placeholder="Email"></Input> 
        <textarea
          placeholder="Message"
          name="message"
          className="rounded-xl p-2 box-border bg-neutral-700 text-neutral-200 text-2xl resize-none"
          rows={3}
          required
        ></textarea>
        <button
          className="flex self-start w-fit text-neutral-200 text-2xl items-center gap-2 bg-neutral-700 p-2 rounded-xl"
          type="submit"
        >
          <IoMdCode
            className="fill-red-700 w-6 self-end icon-transition"
            id="icone"
          />
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
