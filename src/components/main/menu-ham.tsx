import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Hamburger from 'hamburger-react'
import { useEffect } from "react";
import { useState } from "react";

function Menu({isVisible,toggleVisibility}:{isVisible : boolean, toggleVisibility : ()=> void}){
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu (){
        setIsOpen(false);
    }

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
        if (!isVisible) {
            toggleVisibility();
            toggleMenu();
        }
        };
        window.addEventListener("wheel", handleWheel, { passive: true });
    
        return () => window.removeEventListener("wheel", handleWheel);
      }, [isVisible, toggleVisibility]);    
    return(
        <div style={{backgroundColor: isVisible ? "#171717" :"#323232"}}
             className="p-3  text-neutral-200 text-2xl text-center rounded-xl grid absolute right-0 w-48" id="menu">
            <div className="flex items-center justify-between">
                <MdLightMode style={{opacity: isVisible ? 0 : 1}} className="cursor-pointer" id="modo"/>
                <div onClick={toggleVisibility}>
                    <Hamburger color="#e5e5e5" toggled={isOpen} toggle={setIsOpen} ></Hamburger>
                </div>
            </div>
            <ul style={{display: isVisible ? "none":"grid"}} className="m-2 " id="ul">
                <a href="#about"><li >Sobre mim</li></a>
                <a href="#studies"><li >Estudos</li></a>
                <a href="#projects"><li >Projetos</li></a>
                <a href="#contact"><li >Contato</li></a>
            </ul>
        </div>
    )
}

export default Menu;