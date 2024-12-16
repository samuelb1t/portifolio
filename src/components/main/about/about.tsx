import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Picture } from "./picture";

function About() {
  const [title] = useTypewriter({
    words: ["Front-end dev"],
    loop: Infinity,
  });

  return (
    <section className="grid about-columns sm:gap-12 2xl:gap-24 mt-12 sm:mt-16 2xl:mt-32">
      <div className="text-neutral-200 flex flex-col items-center sm:items-start">
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-bold sm:mb-8 2xl:mb-16">
          {title} <Cursor cursorColor="#b91c1c" />
        </h1>
        <div className="block sm:hidden my-8">
          <Picture></Picture>   
        </div>
        <p className="text-xs md:text-base lg:text-xl xl:text-2xl 2xl:text-5xl 2xl:leading-[4rem] font-normal text-font max-w-52 sm:max-w-fit">
          Olá me chamo Samuel, curso Engenharia de Software e busco
          oportunidades para atuar na área. Tenho conhecimentos em tecnologias
          como HTML, CSS, JavaScript, TypeScript e React. <br /> Estou sempre em
          busca de novos desafios e oportunidades para crescer como
          desenvolvedor e criar soluções inovadoras que possam impactar
          positivamente as empresas e os usuários.
        </p>
      </div>
      <div className="hidden sm:block">
        <Picture></Picture>
      </div>
    </section>
  );
}

export default About;
