// import Project from "./project";
import ProjectCard from "./3dCard";

function Projects(){
    return(
        <section className="mt-4">
            <h1 className="text-neutral-200 text-5xl mb-4">Projetos<span className="text-red-700 text-7xl leading-10">.</span></h1>
            <div className="grid grid-cols-3 items-start gap-6">
                <ProjectCard title="titulo" img="./img/calculadora.png"></ProjectCard>
                <ProjectCard title="titulo" img="./img/calculadora.png"></ProjectCard>
                <ProjectCard title="titulo" img="./img/calculadora.png"></ProjectCard>
                <ProjectCard title="titulo" img="./img/calculadora.png"></ProjectCard>
                <ProjectCard title="titulo" img="./img/calculadora.png"></ProjectCard>
                <ProjectCard title="titulo" img="./img/calculadora.png"></ProjectCard>
            </div>
        </section>
    );

}



export default Projects;