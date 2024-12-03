import Button from "./startButton";
import Options from "./options";
import { IoMdCode } from "react-icons/io";
import { useState } from "react";
import Bg from "../background";
import { useNavigate } from "react-router-dom";

function StartApp() {
  const [showOp, setShowOp] = useState(false);
  const navigate = useNavigate();

  const toggleOptions = () => {
    if (showOp) {
      setTimeout(() => {
        document.getElementById("buttons")?.classList.toggle("hidden");
      }, 300);
    } else {
      document.getElementById("buttons")?.classList.toggle("hidden");
    }
    setShowOp(!showOp);
  };  

  return (
    <Bg id="start">
      <div className="grid w-full h-full justify-center mt-4 menu-rows pb-4 sm:pb-0">
        <div className="h-fit">
          <div className="flex items-center sm:items-baseline flex-col sm:flex-row">
            <IoMdCode className="fill-red-700 w-8" />
            <h1 className="text-3xl sm:text-7xl text-neutral-200 display-font">
              Samuel Bitdinger
            </h1>
          </div>
          <div className="flex w-full justify-center mt-2 items-baseline">
            <h2 className="text-neutral-200  text-2xl sm:text-5xl display-font">portifólio</h2>
            <span className="text-red-700 justify-self-center text-4xl sm:text-7xl lh">
              .
            </span>
          </div>
        </div>
        <div
          className="grid max-w-xs w-full justify-self-center items-end gap-5"
          id="buttons"
        >
          <Button
            texto="Iniciar."
            onClick={() => {navigate("/main"); }}
          ></Button>
          <Button texto="Opções." onClick={toggleOptions}></Button>
          <Button texto="Sair." onClick={() => {}}></Button>
        </div>
        <Options isVisible={showOp} toggleVisibility={toggleOptions}></Options>
      </div>
    </Bg>
  );
}

export default StartApp;
