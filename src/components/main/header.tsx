import Menu from "./menu-ham";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({menuId}:{menuId:string}) {
  const [active,setActive] = useState(true);
  const navigate = useNavigate();

 const toggleMenu = () =>{
  setActive(!active);
}
  return (
    <header className="flex justify-between mb-12 relative">
      <a onClick={() => {navigate("/"); }}><img src="../../../img/samuel.svg" alt="'Logo'" className="mt-4 cursor-pointer"/></a>
      <div>
        <Menu isVisible={active} toggleVisibility={toggleMenu} id={menuId}></Menu>
      </div>
    </header>
  );
}

export default Header;
