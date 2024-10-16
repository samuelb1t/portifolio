import { FaGithub } from "react-icons/fa";


function Contact(){
    return(
        <section className="mt-8 grid">
            <div className="grid contact-columns items-center gap-4">
                <h1 className="text-neutral-200 text-5xl mb-4">Contato<span className="text-red-700">.</span></h1>
                <span className="bg-neutral-200 w-full separator rounded-sm"></span>
                <a href="https://github.com/samuelb1t" target="_blank"><FaGithub className="w-10 h-10 fill-neutral-200"/></a>
                <span className="bg-neutral-200 w-6 separator rounded-sm"></span>
                <a href="https://www.linkedin.com/in/samuel-bitdinger-140a7627b/" target="_blank"><img src="./img/linkedin.svg" alt="logo linkedin" className="w-10 h-10"/></a>
            </div>
            <div className="grid gap-4 input-width justify-self-center mt-12">
                <input type="text" placeholder="Name" className="rounded-xl p-2 box-border bg-neutral-700 text-neutral-200 text-2xl"/>
                <input type="text" placeholder="Email" className="rounded-xl p-2 box-border bg-neutral-700 text-neutral-200 text-2xl"/>
                <textarea placeholder="Message" className="rounded-xl p-2 box-border bg-neutral-700 text-neutral-200 text-2xl" rows={3}></textarea>
            </div>
        </section>
    )
}

export default Contact;