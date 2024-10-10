import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IoMdCode } from "react-icons/io";
import "./index.css";
import Bg from "./components/background";
import Button from "./components/startButton";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Bg>
      <div className="grid w-fit mx-auto pt-24 justify-center gap-4">
        <div className="flex items-baseline">
          <IoMdCode className="fill-red-700 w-8" />
          <h1 className="text-7xl text-neutral-200 display-font">
            Samuel Bitdinger
          </h1>
        </div>
        <div className="flex w-fit mx-auto mb-8">
          <h2 className="text-neutral-200 text-5xl display-font">portifolio</h2>
          <span className="text-red-700 justify-self-center text-7xl lh">
            .
          </span>
        </div>
        <div className="grid max-w-xs w-full justify-self-center gap-6 self-baseline  ">
          <Button texto="Iniciar."></Button>
          <Button texto="Opções."></Button>
          <Button texto="Sair."></Button>
        </div>
      </div>
    </Bg>
  </StrictMode>
);
