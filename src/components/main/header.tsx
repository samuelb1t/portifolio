import Menu from "./menu-ham";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/img/samuel.svg";

function Header({menuId}:{menuId:string}) {
  const [active,setActive] = useState(true);
  const navigate = useNavigate();

 const toggleMenu = () =>{
  setActive(!active);
}
  return (
    <header className="flex justify-between sm:mb-12 relative px-6 sm:px-0 pt-4 sm:pt-0">
      <a onClick={() => {navigate("/"); }}><img src={logo} className="mt-4 cursor-pointer w-20 sm:w-auto"/></a>
      <div>
        <Menu isVisible={active} toggleVisibility={toggleMenu} id={menuId}></Menu>
      </div>
    </header>
  );
}

export default Header;
