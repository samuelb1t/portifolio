import { MdLightMode } from "react-icons/md";
import Hamburger from 'hamburger-react'
import { useEffect } from "react";
import { IoMdCode } from "react-icons/io";


function Menu({isVisible,toggleVisibility}:{isVisible : boolean, toggleVisibility : ()=> void}){

    function toggleMenuHam (){
        toggleVisibility();
    }

    useEffect(() => {
        const handleWheel = () => {
        if (!isVisible) {
            toggleVisibility();
            toggleMenuHam();
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
                    <Hamburger color="#e5e5e5" toggled={!isVisible} toggle={toggleVisibility}></Hamburger>
                </div>
            </div>
            <ul style={{display: isVisible ? "none":"grid"}} className="m-2 gap-3 items-center i" id="ul">
                <div className="flex gap-2 items-center">
                  <IoMdCode className="fill-red-700 w-6 self-end icon-transition" style={{opacity: window.scrollY == 0 ? 1 : 0 }} id="icone"/>
                  <a href="#about"><li >Sobre mim</li></a>
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdCode className="fill-red-700 w-6 self-end icon-transition" style={{opacity: window.scrollY > 100 && window.scrollY < 750 ? 1 : 0 }} id="icone"/>
                  <a href="#studies"><li >Estudos</li></a>
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdCode className="fill-red-700 w-6 self-end icon-transition"  style={{opacity: window.scrollY > 750 && window.scrollY < 1400 ? 1 : 0 }} id="icone"/>
                  <a href="#projects"><li >Projetos</li></a>
                </div>
                <div className="flex gap-2 items-center">
                  <IoMdCode className="fill-red-700 w-6 self-end icon-transition" style={{opacity: window.scrollY > 1400 ? 1 : 0 }}  id="icone"/>
                  <a href="#contact"><li >Contato</li></a>
                </div>
            </ul>
        </div>
    )
}

export default Menu;