import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { useState } from "react";

function Options() {
  const [eng, setEng] = useState(false);
  const [light, setLight] = useState(false);
  return (
    <section className="w-72 h-full  border-2 border-solid border-neutral-200 rounded-3xl grid justify-self-center relative hidden" id="options">
      <IoClose className="absolute top-2 right-2 fill-neutral-200 cursor-pointer" onClick={()=>{
        document.querySelector("#buttons")?.classList.toggle("hidden");
        document.querySelector("#options")?.classList.toggle("hidden");
      }}/>
      <div className="self-center grid gap-4">
        <div className="grid justify-center justify-items-center text-neutral-200">
          <h2 className="font-bold mb-1">Idioma</h2>
          <div className="flex">
            <IoMdCode className="fill-red-700 w-5 " style={{ opacity: eng ? 0 : 1 }}/>
            <span className="text-2xl font-normal cursor-pointer" onClick={() => {setEng(false);}}>
              Português
            </span>
          </div>
          <div className="flex">
            <IoMdCode className="fill-red-700 w-5" style={{ opacity: eng ? 1 : 0 }}/>
            <span className="text-2xl font-normal cursor-pointer" onClick={() => {setEng(true);}}>
              Inglês
            </span>
          </div>
        </div>
        <div className="grid justify-center justify-items-center text-neutral-200">
          <h2 className="font-bold mb-1">Tema</h2>
          <div className="flex gap-8">
            <div className="flex">
              <IoMdCode className="fill-red-700 w-5" style={{ opacity: light ? 0 : 1 }}/>
              <MdDarkMode className="cursor-pointer" onClick={()=>{setLight(false)}} />
            </div>
            <div className="flex mr-3">
              <IoMdCode className="fill-red-700 w-5" style={{ opacity: light ? 1 : 0 }}/>
              <MdLightMode className="cursor-pointer" onClick={()=>{setLight(true)}}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Options;
