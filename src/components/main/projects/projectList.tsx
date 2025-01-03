import calculadora from "../../../assets/calculadora.png";
import clima from "../../../assets/clima.png";
import filme from "../../../assets/letterbox.png";
//import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const ProjectList = [
  {
    title: "Calculadora",
    src: calculadora,
    content: () => (
      <div>
        <div>
          <p className="mt-1 ">
            Projeto desenvolvido no grupo de estudo da AGES. Foi desenvolvido
            utilizando HTML, CSS e Javascript.
          </p>
          <p className="mt-1">Em andamento</p>
        </div>
        <div className="flex mt-2 gap-4">
          <a href="https://github.com/samuelb1t/calculadora" target="_blank">
            <FaGithub className="w-6 h-6 md:w-8 md:h-8 2xl:w-20 2xl:h-20" />
          </a>
          {/* <a href="">
            <FaLink className="w-6 h-6 md:w-8 md:h-8 2xl:w-20 2xl:h-20"/>
          </a> */}
        </div>
      </div>
    ),
  },
  {
    title: "Projeto clima",
    src: clima,
    content: () => (
      <div>
        <div>
          <p className="mt-2">
            O projeto foi desenvolvido em grupo no gru'po de estudo da AGES. A
            proposta do projeto é permitir pesquisar o clima em qualquer cidade
            do mundo, possibilitando também a criação de um login para criação
            de um histórico.
          </p>
          <p className="mt-1">Finalizado em 09/2024</p>
        </div>
        <div className="flex mt-2 gap-4">
          <a
            href="https://github.com/samuelb1t/projeto-clima-frontend"
            target="_blank"
          >
            <FaGithub className="w-6 h-6 md:w-8 md:h-8 2xl:w-20 2xl:h-20" />
          </a>
          {/* <a href="">
            <FaLink className="w-6 h-6 md:w-8 md:h-8 2xl:w-20 2xl:h-20"/>
          </a> */}
        </div>
      </div>
    ),
  },
  {
    title: "Projeto Filmes  ",
    src: filme,
    content: () => (
      <div>
        <div>
          <p className="mt-2">
            Projeto desenvolvido no grupo de estudo da AGES. A proposta do
            projeto é permitir ao usuário pesquisar e avaliar algum filme. Além
            disso é possivel também se cadastrar para que as avaliações fiquem
            salvas
          </p>
          <p className="mt-1">Em andamento</p>
        </div>
        <div className="flex mt-2 gap-4">
          <a
            href="https://github.com/samuelb1t/projeto-letterbox-"
            target="_blank"
          >
            <FaGithub className="w-6 h-6 md:w-8 md:h-8 2xl:w-20 2xl:h-20" />
          </a>
          {/* <a href="">
            <FaLink className="w-6 h-6 md:w-8 md:h-8 2xl:w-20 2xl:h-20"/>
          </a> */}
        </div>
      </div>
    ),
  },
];
