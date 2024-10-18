import Project from "./project";

function Projects(){
    return(
        <section className="mt-4">
            <h1 className="text-neutral-200 text-5xl mb-4">Projetos<span className="text-red-700">.</span></h1>
            <div className="flex gap-4 items-start'">
                <Project id="1" title="Calculadora" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" 
                hiddenText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" img="./img/calculadora.png"></Project>
                <Project id="2" title="API Clima/Tempo" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" 
                hiddenText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" img="./img/calculadora.png"></Project>
                <Project id="3" title="Letterbox" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" 
                hiddenText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" img="./img/calculadora.png"></Project>
            </div>
        </section>
    );

}

export default Projects;