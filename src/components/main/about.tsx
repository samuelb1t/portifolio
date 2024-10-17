import { useTypewriter, Cursor } from 'react-simple-typewriter'

function About(){
    const [title] = useTypewriter({
        words: ["Front-end dev"],
        loop: Infinity,
    })


    return(
        <section className="grid about-columns justify-between gap-12 mt-16">
            <div className="text-neutral-200">
                <h1 className="text-7xl font-bold mb-8">{title} <Cursor cursorColor="#b91c1c"/></h1>
                <p className="text-2xl font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam distinctio mollitia voluptatibus officiis provident voluptate cupiditate sint quia, autem, deleniti molestias iure eligendi. Minus soluta aliquid odio saepe, labore nihil.</p>
            </div>
            <img src="../../../img/foto.png" alt="Foto" className="w-72"/>
        </section>
    );
}

export default About;