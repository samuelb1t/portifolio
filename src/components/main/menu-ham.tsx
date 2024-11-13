import { MdLightMode } from "react-icons/md";
import Hamburger from 'hamburger-react'
import { useEffect } from "react";
import MenuItem from "./menuItem";


function Menu({isVisible,toggleVisibility,id}:{isVisible : boolean, toggleVisibility : ()=> void,id:string}){

    useEffect(() => {
        const handleWheel = () => {
        if (!isVisible) {
            toggleVisibility();
        }
        };

        const handleClickOutside = (e : MouseEvent) => {
            const menu = document.getElementById(id);
            if(!menu?.contains(e.target as Node)){
                handleWheel();
                console.log("aaaaaa")
                console.log(window)
            }
        }

        window.addEventListener("wheel", handleWheel, { passive: true });
        window.addEventListener("click", handleClickOutside);
    
        return () => {    
            window.removeEventListener("wheel", handleWheel);
            document.removeEventListener("click", handleClickOutside);
        }
      }, [isVisible, toggleVisibility,id]); 

  

    return(
        <div style={{backgroundColor: isVisible ? "#171717" :"#323232"}}
             className="p-2 text-neutral-200 text-2xl text-center rounded-xl grid absolute right-0 z-50 bg-red-600" id={id}>
            <div className="flex items-center justify-between">
                <MdLightMode style={{display: isVisible ? "none" : "block"}} className="cursor-pointer" id="modo"/>
                <div onClick={toggleVisibility}>
                    <Hamburger color="#e5e5e5" toggled={!isVisible} toggle={toggleVisibility} ></Hamburger>
                </div>
            </div>
            <ul style={{display: isVisible ? "none":"grid"}} className="grid m-2 gap-2 items-center " id="ul">
                <MenuItem href="#about" text="Sobre mim" targetSectionId="1"></MenuItem>
                <MenuItem href="#studies" text="Estudos" targetSectionId="2" ></MenuItem>
                <MenuItem href="#projects" text="Projetos" targetSectionId="3"></MenuItem>
                <MenuItem href="#contact" text="Contato" targetSectionId="4"></MenuItem>
            </ul>
        </div>
    )
}

export default Menu;