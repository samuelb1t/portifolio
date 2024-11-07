import { MdLightMode } from "react-icons/md";
import Hamburger from 'hamburger-react'
import { useEffect } from "react";
import MenuItem from "./menuItem";


function Menu({isVisible,toggleVisibility}:{isVisible : boolean, toggleVisibility : ()=> void}){

    useEffect(() => {
        const handleWheel = () => {
        if (!isVisible) {
            toggleVisibility();
        }
        };
        window.addEventListener("wheel", handleWheel, { passive: true });
    
        return () => window.removeEventListener("wheel", handleWheel);
      }, [isVisible, toggleVisibility]); 

    return(
        <div style={{backgroundColor: isVisible ? "#171717" :"#323232"}}
             className="p-2 text-neutral-200 text-2xl text-center rounded-xl grid absolute right-0 z-50 bg-red-600" id="menu">
            <div className="flex items-center justify-between">
                <MdLightMode style={{display: isVisible ? "none" : "block"}} className="cursor-pointer" id="modo"/>
                <div onClick={toggleVisibility}>
                    <Hamburger color="#e5e5e5" toggled={!isVisible} toggle={toggleVisibility} ></Hamburger>
                </div>
            </div>
            <ul style={{display: isVisible ? "none":"grid"}} className="grid m-2 gap-2 items-center " id="ul">
                <MenuItem href="#about" text="Sobre mim" min={0} max={100}></MenuItem>
                <MenuItem href="#studies" text="Estudos" min={100} max={750}></MenuItem>
                <MenuItem href="#projects" text="Projetos" min={750} max={1400}></MenuItem>
                <MenuItem href="#contact" text="Contato" min={1400} max={2100}></MenuItem>
            </ul>
        </div>
    )
}

export default Menu;