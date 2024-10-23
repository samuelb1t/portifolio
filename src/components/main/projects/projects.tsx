import Project from "./project";

function Projects(){
    return(
        <section className="mt-4">
            <h1 className="text-neutral-200 text-5xl mb-4">Projetos<span className="text-red-700 text-7xl leading-10">.</span></h1>
            <div className="flex gap-4 items-start">
                <Project id="1" title="Calculadora" text="Projeto desenvolvido no grupo de estudos da AGES, com o objetivo de fazer uma simples calculadora. As tecnologias utilizadas " 
                hiddenText="foram: HTML, CSS e JavaScript" img="./img/calculadora.png"></Project>
                <Project id="2" title="API Clima/Tempo" text="Projeto feito eme grupo no grupo de estudos da AGES, com o objetivo de pesquisar o clima em determinada cidade usando uma API. " 
                hiddenText="Foi desenvolvido um backend para possibilitar login, históricos e cidades favoritas" img="./img/projeto-clima.png"></Project>
                <Project id="3" title="Letterbox" text="Projeto desenvolvido no grupo de estudo da AGES com o objetivo de fazer uma API que possibilite a avalição de filmes. " 
                hiddenText="Foi adicionada a função de login para armazenar os filmes ja avaliados" img="./img/letterbox-img.png"></Project>
            </div>
        </section>
    );

}

export default Projects;