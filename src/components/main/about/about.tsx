import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Picture } from "./picture";

function About() {
  const [title] = useTypewriter({
    words: ["Front-end dev"],
    loop: Infinity,
  });

  return (
    <section className="grid about-columns  sm:gap-12 mt-12 sm:mt-16">
      <div className="text-neutral-200 flex flex-col items-center">
        <h1 className="text-3xl sm:text-7xl font-bold sm:mb-8">
          {title} <Cursor cursorColor="#b91c1c" />
        </h1>
        <div className="block sm:hidden my-2">
          <Picture></Picture>   
        </div>
        <p className="text-xs sm:text-2xl font-normal text-font max-w-60 sm:max-w-fit">
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
