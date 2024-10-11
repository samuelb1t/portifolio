import Button from "./startButton";
import Options from "./options";
import { IoMdCode } from "react-icons/io";

function App(){
    return(
        <div className="grid w-full h-full pt-24 pb-14 justify-center lines gap-8">
        <div>
          <div className="flex items-baseline">
            <IoMdCode className="fill-red-700 w-8" />
            <h1 className="text-7xl text-neutral-200 display-font">
              Samuel Bitdinger
            </h1>
          </div>
          <div className="flex w-fit mx-auto mt-2">
            <h2 className="text-neutral-200 text-5xl display-font">
              portifólio
            </h2>
            <span className="text-red-700 justify-self-center text-7xl lh">
              .
            </span>
          </div>
        </div>
        <div className="grid max-w-xs w-full justify-self-center gap-6 items-end" id="buttons">
          <Button texto="Iniciar." onClick={()=>{}}></Button>
          <Button texto="Opções." onClick={()=>{
            document.querySelector("#buttons")?.classList.toggle("hidden");
            document.querySelector("#options")?.classList.toggle("hidden");
            }}></Button>
          <Button texto="Sair." onClick={()=>{}}></Button>
        </div>
        <Options></Options>
      </div>
    )
}

export default App;
