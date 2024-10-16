import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header className="flex justify-between items-center mb-12">
      <a href="../../../index.html"><img src="../../../img/samuel.svg" alt="'Logo'"/></a>
      <FiMenu className="text-neutral-200 w-10 h-10 cursor-pointer" id="menu-ham"/>
    </header>
  );
}



export default Header;
