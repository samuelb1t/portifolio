import Menu from "./menu-ham";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo";

function Header({ menuId }: { menuId: string }) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setActive(!active);
  };
  return (
    <header className="flex justify-between lg:mb-12 relative px-6 lg:px-0 2xl:px-24 md:pt-0">
      <a
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo></Logo>
      </a>
      <div>
        <Menu
          isVisible={active}
          toggleVisibility={toggleMenu}
          id={menuId}
        ></Menu>
      </div>
    </header>
  );
}

export default Header;
