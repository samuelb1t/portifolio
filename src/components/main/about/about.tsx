import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Picture } from './picture';

function About(){
    const [title] = useTypewriter({
        words: ["Front-end dev"],
        loop: Infinity,
    })


    return(
        <section className="grid about-columns justify-between gap-12 mt-16">
            <div className="text-neutral-200">
                <h1 className="text-7xl font-bold mb-8">{title} <Cursor cursorColor="#b91c1c"/></h1>
                <p className="text-2xl font-normal text-font">Olá me chamo Samuel, curso Engenharia de Software e busco oportunidades para atuar na área. Tenho conhecimentos em tecnologias como HTML, CSS, JavaScript, TypeScript e React. <br /> Estou sempre em busca de novos desafios e oportunidades para crescer como desenvolvedor e criar soluções inovadoras que possam impactar positivamente as empresas e os usuários.</p>
            </div>
            <Picture></Picture>
        </section>
    );
}

export default About;