import { IoClose } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Menu(){
    return(
        <div className="p-4 box-border  text-neutral-200 text-2xl bg absolute right-0 top-0 grid text-center rounded-xl" id="menu">
            <MdLightMode className="cursor-pointer"/>
            <ul className="m-2">
                <li>Sobre mim</li>
                <li>Skills</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>

        </div>
    )    
}

export default Menu;