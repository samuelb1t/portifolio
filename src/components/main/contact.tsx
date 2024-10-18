import { FaGithub } from "react-icons/fa";
import Svg from "./linkedinSvg";
import { useState } from "react";
import { IoMdCode } from "react-icons/io";

function Contact() {
  const [currentFill, setCurrentFill] = useState("logo-cor");

  function changeFill(){
		setCurrentFill("logo-cor2");
	}

  return (
    <section className="mt-8 grid">
      <div className="grid contact-columns items-center gap-4">
        <h1 className="text-neutral-200 text-5xl mb-4">
          Contato<span className="text-red-700">.</span>
        </h1>
        <span className="bg-neutral-200 w-full separator rounded-sm"></span>
        <a href="https://github.com/samuelb1t" target="_blank">
          <FaGithub className="w-10 h-10 fill-neutral-200" />
        </a>
        <span className="bg-neutral-200 w-6 separator rounded-sm"></span>
        <a
          href="https://www.linkedin.com/in/samuel-bitdinger-140a7627b/"
          target="_blank"
          className="text-neutral-200"
        >
          <Svg />
        </a>
      </div>
      <form className="grid gap-4 input-width justify-self-center mt-12" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="31315395-dc2f-453c-9ec7-683cc43d0476" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="rounded-xl p-2 box-border bg-neutral-700 text-neutral-200 text-2xl"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-xl p-2 box-border bg-neutral-700 text-neutral-200 text-2xl"
          required
        />
        <textarea 
          placeholder="Message"
          name="message"
          className="rounded-xl p-2 box-border bg-neutral-700 text-neutral-200 text-2xl resize-none"
          rows={3}
          required
        ></textarea>
      <button className="flex self-start w-fit text-neutral-200 text-2xl items-center gap-2 bg-neutral-700 p-2 rounded-xl" type="submit">
        <IoMdCode className="fill-red-700 w-6 self-end icon-transition"
          id="icone"
        />Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
