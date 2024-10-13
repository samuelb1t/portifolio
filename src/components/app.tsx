import Button from "./startButton";
import Options from "./options";
import { IoMdCode } from "react-icons/io";
import { useState } from "react";

function App(){
    const [showOp,setShowOp] = useState(false);

    const toggleOptions = ()=> {
      if(showOp){
        setTimeout(()=>{document.getElementById("buttons")?.classList.toggle("hidden");},300)
      }else{
        document.getElementById("buttons")?.classList.toggle("hidden");
      }
      setShowOp(!showOp);
    }

    return(
      <div className="grid w-full h-full pt-24 pb-14 justify-center lines">
        <div className="h-fit">
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
          <Button texto="Iniciar." onClick={()=>{window.location.href = "../home.html"}}></Button>
          <Button texto="Opções." onClick={toggleOptions}></Button>
          <Button texto="Sair." onClick={()=>{}}></Button>
        </div>
        <Options isVisible={showOp} toggleVisibility={toggleOptions}></Options>
      </div>
    )
}

export default App;
