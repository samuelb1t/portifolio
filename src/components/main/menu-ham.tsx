import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
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

      const [dark, setDark] = useState(false);

      useEffect(() => {
        isMobile();
        isDark();
        window.addEventListener("resize", isMobile);

        return () => {
            window.removeEventListener("resize", isMobile);
        };
    }, []);

    

    function isDark(){
        const root = document.getElementById("mainRoot");
        if(root){
            setDark(root.classList.contains("dark"));
        }
    }

    function changeTheme(){
        const root = document.getElementById("mainRoot");
        root?.classList.toggle("dark");
        setDark(!dark);
    }

      return(
        <div style={{backgroundColor: isVisible ? "transparent" : dark ? "#323232" : "#E2DAD6"}}
             className="p-1 sm:p-2 2xl:p-4 dark:text-neutral-200 text-neutral-950 text-2xl text-center rounded-xl 2xl:rounded-2xl grid absolute top-0 md:-top-1 lg:top-1 right-2 sm:right-0 2xl:right-24 z-50 " id={id}>
            <div className="flex items-center justify-between">
                <MdLightMode style={{display: !isVisible && dark ? "block" : "none"}} className="cursor-pointer w-6 sm:w-auto sm:h-auto 2xl:w-12 ml-2" id="modo" onClick={changeTheme}/>  
                <MdDarkMode style={{display: !isVisible && !dark ? "block" : "none"}} className="cursor-pointer w-6 sm:w-auto sm:h-auto 2xl:w-12 ml-2" id="modo" onClick={changeTheme}/>
                <div onClick={toggleVisibility}>
                    <Hamburger size={mobile ? 24 : 32} color={dark ? "#e5e5e5" : "#0a0a0a"} toggled={!isVisible} toggle={toggleVisibility}></Hamburger>
                </div>
            </div>
            <ul style={{display: isVisible ? "none":"grid"}} className="grid m-1 sm:m-2 2xl:m-4 gap-2 2xl:gap-6 items-center " id="ul">
                <MenuItem href="#about" text="Sobre mim" targetSectionId="1"></MenuItem>
                <MenuItem href="#studies" text="Estudos" targetSectionId="2" ></MenuItem>
                <MenuItem href="#projects" text="Projetos" targetSectionId="3"></MenuItem>
                <MenuItem href="#contact" text="Contato" targetSectionId="4"></MenuItem>
            </ul>
        </div>
    )
}

export default Menu;