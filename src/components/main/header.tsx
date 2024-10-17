import Menu from "./menu-ham";
import { useState } from "react";

function Header() {
  const [active,setActive] = useState(true);

 const toggleMenu = () =>{
  setActive(!active);
}
  return (
    <header className="flex justify-between mb-12 relative">
      <a href="../../../index.html"><img src="../../../img/samuel.svg" alt="'Logo'" className="mt-4"/></a>
      <div onClick={toggleMenu}>
        <Menu isVisible={active} toggleVisibility={toggleMenu}></Menu>
      </div>
    </header>
  );
}

export default Header;
