import { FiMenu } from "react-icons/fi";
import Hamburger from 'hamburger-react'
import Menu from "./menu-ham";
import { useState } from "react";

function menu(){
  console.log("aa")
  document.getElementById("menu")?.classList.toggle("hidden");
  document.getElementById("menu")?.classList.toggle("opacity-0");
}

function Header() {
  return (
    <header className="flex justify-between items-center mb-12 relative">
      <a href="../../../index.html"><img src="../../../img/samuel.svg" alt="'Logo'"/></a>
      <div onClick={menu} className="z-10"><Hamburger color="#e5e5e5"></Hamburger></div>
      <Menu></Menu>
    </header>
  );
}



export default Header;
