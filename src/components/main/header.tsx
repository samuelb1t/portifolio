import Menu from "./menu-ham";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import logo from "/img/samuel.svg";
import Logo from "./logo";

function Header({menuId}:{menuId:string}) {
  const [active,setActive] = useState(false);
  const navigate = useNavigate();

 const toggleMenu = () =>{
  setActive(!active);
}
  return (
    <header className="flex justify-between lg:mb-12 relative px-6 lg:px-0 2xl:px-24 md:pt-0">
      <a onClick={() => {navigate("/"); }} className="w-20 lg:w-28 xl:w-auto 2xl:w-64"><Logo></Logo></a>
      <div>
        <Menu isVisible={active} toggleVisibility={toggleMenu} id={menuId}></Menu>
      </div>
    </header>
  );
}

export default Header;
