import { InfiniteMovingCards } from "../../ui/infinite-moving-cards.tsx";

function Studies() {
  return (
    <section className="grid sm:grid-cols-[auto_1fr] px-4 sm:px-0 2xl:px-12 md:gap-8 lg:gap-14 2xl:gap-32 mt-12 2xl:mt-28">
      <h1 className="text-neutral-200 sm:text-neutral-800 text-4xl md:text-7xl lg:text-8xl 2xl:text-9xl leading-none md:max-w-24 lg:max-w-36 md:break-words">
        ESTUDOS</h1>
      <section className="text-neutral-200 grid grid-rows-[auto_auto_auto_auto]">
        <h2 className="block text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl mb-2">
          Faculdade<span className="text-red-700 text-5xl xl:text-7xl 2xl:text-9xl sm:leading-10">.</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-2 md:gap-4 lg:gap-8 2xl:gap-16 text-font">
          <div className="border-2 rounded-xl 2xl:rounded-3xl p-2 2xl:p-6 box-border grid">
            <h3 className="text-base md:text-lg xl:text-xl 2xl:text-4xl">Engenharia de Computação</h3>
            <span className="text-xs md:text-sm xl:text-lg 2xl:text-3xl block">UERGS</span>
            <span className="text-xs md:text-sm xl:text-lg 2xl:text-3xl">2023/2 - 2024/1</span>
          </div>
          <div className="border-2 rounded-xl 2xl:rounded-3xl p-2 2xl:p-6 box-border grid">
            <h3 className="text-base md:text-lg xl:text-xl 2xl:text-4xl">Engenharia de Software</h3>
            <span className="text-xs md:text-sm xl:text-lg 2xl:text-3xl block">PUC-RS</span>
            <span className="text-xs md:text-sm xl:text-lg 2xl:text-3xl">2024/2 - hoje</span>
          </div>
        </div>
        <h2 className="block text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl  mb-2 mt-1 md:mt-2 lg:mt-4">
          Demais cursos
          <span className="text-red-700  text-5xl xl:text-7xl 2xl:text-9xl sm:leading-10">.</span>
        </h2>
        <div className="bg-neutral-800 p-1 lg:p-2 flex overflow-auto rounded-xl" id="course-container">
            <InfiniteMovingCards
            items={courses}
            direction="right"
            speed="normal"
            ></InfiniteMovingCards>
        </div>
      </section>
    </section>
  );
}

const courses = [
  {
    title: "JavaScript completo es6+",
    school: "Origamid",
    hours: "120h",
    date: "em andamento",
  },
  {
    title: "HTML e CSS para Iniciantes",
    school: "Origamid",
    hours: "46h",
    date: "jul/2024",
  },
  {
    title: "UI Design para Iniciantes",
    school: "Alura",
    hours: "34h",
    date: "mar/2024",
  },
  {
    title: "JavaScript: consumindo e tratando dados de uma API",
    school: "Alura",
    hours: "6h",
    date: "maio/2023",
  },
  {
    title: "JavaScript: manipulando o DOM",
    school: "Alura",
    hours: "6h",
    date: "maio/2023",
  },
  {
    title: "JavaScript para Web: Crie páginas dinâmicas",
    school: "Alura",
    hours: "10h",
    date: "abril/2023",
  },
  {
    title: "HTML e CSS: trabalhando com responsividade e publicação de projetos",
    school: "Alura",
    hours: "6h",
    date: "mar/2023",
  },
  {
    title: "HTML e CSS: trabalhando com responsividade e publicação de projetos",
    school: "Alura",
    hours: "6h",
    date: "mar/2023",
  },
  {
    title: "Lógica de programação: comece em lógica com o jogo Pong e JavaScript",
    school: "Alura",
    hours: "6h",
    date: "mar/2023",
  },
  {
    title: "Lógica de programação: laços e listas com JavaScript",
    school: "Alura",
    hours: "4h",
    date: "mar/2023",
  },
];

export default Studies;
