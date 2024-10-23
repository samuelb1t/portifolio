import Course from "./course.tsx";

function Studies(){
    return(
        <section className="grid studies-columns gap-12">
            <h1 className="text-neutral-800 text-8xl leading-none">ES<br/>TU<br/>DO<br/>S</h1>
                <section className="text-neutral-200 grid">
                    <h2 className="block text-5xl mb-2">Faculdade<span className="text-red-700 text-7xl leading-10">.</span></h2>
                    <div className="grid grid-cols-2 gap-8 text-font">
                        <div className="border-2 rounded-xl p-2 box-border grid">
                            <h3 className="text-2xl">Engenharia de Computação</h3>
                            <span className="text-xl block">UERGS</span>
                            <span className="text-xl">2023/2 - 2024/1</span>
                        </div>
                        <div className="border-2 rounded-xl p-2 box-border grid">
                            <h3 className="text-2xl">Engenharia de Softare</h3>
                            <span className="text-xl block">PUC-RS</span>
                            <span className="text-xl">2024/2 - hoje</span>
                        </div>
                    </div>
                    <h2 className="block text-5xl mb-2 mt-4">Demais cursos<span className="text-red-700 text-7xl leading-10">.</span></h2>
                    <div className="bg-neutral-800 p-3 box-border flex overflow-auto gap-5 rounded-xl" id="course-container">
                        <Course name="JavaScript completo es6+" school="Origamid" hours="120h" date="Em progresso"></Course>
                        <Course name="HTML e CSS para Iniciantes" school="Origamid" hours="46h" date="jul/2024"></Course>
                        <Course name="UI Design para Iniciantes" school="Origamid" hours="34h" date="mar/2024"></Course>
                        <Course name="JavaScript: consumindo e tratando dados de uma API" school="Alura" hours="6h" date="maio/2023"></Course> 
                        <Course name="JavaScript: manipulando o DOM" school="Alura" hours="6h" date="maio/2023"></Course> 
                        <Course name="JavaScript para Web: Crie páginas dinâmicas" school="Alura" hours="10h" date="abril/2023"></Course> 
                        <Course name="HTML e CSS: trabalhando com responsividade e publicação de projetos" school="Alura" hours="6h" date="mar/2023"></Course>                                       
                        <Course name="Lógica de programação: comece em lógica com o jogo Pong e JavaScript" school="Alura" hours="6h" date="mar/2023"></Course>
                        <Course name="Lógica de programação: laços e listas com JavaScript" school="Alura" hours="4h" date="mar/2023"></Course>  
                    </div>
                </section>
            
        </section>
    )
}

export default Studies;