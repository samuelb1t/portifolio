import { MdLightMode } from "react-icons/md";
import Hamburger from 'hamburger-react'
import { useEffect, useState } from "react";
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
      
      const [mobile, setMobile] = useState(false);

      function isMobile(){
        if(window.innerWidth < 500){
            setMobile(true);
        }else{
            setMobile(false);
        }
      }

      useEffect(() => {
        isMobile(); // Call on component mount
        window.addEventListener("resize", isMobile); // Add resize listener

        return () => {
            window.removeEventListener("resize", isMobile); // Clean up on unmount
        };
    }, []);

      return(
        <div style={{backgroundColor: isVisible ? "#171717" :"#323232"}}
             className="p-1 sm:p-2 text-neutral-200 text-2xl text-center rounded-xl grid absolute top-3 right-2 sm:right-0 z-50 bg-red-600" id={id}>
            <div className="flex items-center justify-between">
                <MdLightMode style={{display: isVisible ? "none" : "block"}} className="cursor-pointer w-6 sm:w-auto sm:h-auto ml-2" id="modo"/>
                <div onClick={toggleVisibility}>
                    <Hamburger size={mobile ? 24 : 32} color="#e5e5e5" toggled={!isVisible} toggle={toggleVisibility} ></Hamburger>
                </div>
            </div>
            <ul style={{display: isVisible ? "none":"grid"}} className="grid m-1 sm:m-2 gap-2 items-center " id="ul">
                <MenuItem href="#about" text="Sobre mim" targetSectionId="1"></MenuItem>
                <MenuItem href="#studies" text="Estudos" targetSectionId="2" ></MenuItem>
                <MenuItem href="#projects" text="Projetos" targetSectionId="3"></MenuItem>
                <MenuItem href="#contact" text="Contato" targetSectionId="4"></MenuItem>
            </ul>
        </div>
    )
}

export default Menu;