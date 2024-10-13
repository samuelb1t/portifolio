import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { useState } from "react";
import { motion} from "framer-motion";

function Options({isVisible,toggleVisibility}:{isVisible : boolean, toggleVisibility : ()=> void}) {
  const [eng, setEng] = useState(false);
  const [light, setLight] = useState(false);

  const [isClosing,setIsClosing] = useState(false);
  const [isLight,setIsLight] = useState(false);
  const [isDark,setIsDark] = useState(false)

  return ( 
    <motion.section className="w-72 h-full border-2 border-solid border-neutral-200 rounded-3xl grid justify-self-center relative" id="options"
    initial={{x:"-50%", display: "none",opacity: 0}}
    animate={{x: isVisible ? 0 : "-50%", display: isVisible ? "grid" : "none", opacity: isVisible ? 1 : 0}}
    transition={{type: "tween", duration: .3}}
    >
      <motion.div className="absolute top-2 right-2"
      initial={{transform:"rotate(0)"}}
      animate={{transform: isClosing ? "rotate(180deg)" : "rotate(0)"}}
      transition={{type: "tween", duration: .3}}
      onMouseEnter={()=>{setIsClosing(true)}}
      onMouseLeave={()=>{setIsClosing(false)}}
      >
        <IoClose className="fill-neutral-200 cursor-pointer" onClick={toggleVisibility}/>
      </motion.div>
      <div className="self-center grid gap-4">
        <div className="grid justify-center justify-items-center text-neutral-200">
          <h2 className="font-bold mb-1">Idioma</h2>
          <div className="flex mr-3">
            <IoMdCode className="fill-red-700 w-5 " style={{ opacity: eng ? 0 : 1 }}/>
            <span className="text-2xl font-normal cursor-pointer" onClick={() => {setEng(false);}}>
              Português
            </span>
          </div>
          <div className="flex mr-3">
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
              <motion.div
                initial={{transform:"rotate(0)"}}
                animate={{transform: isDark ? "rotate(360deg)" : "rotate(0)"}}
                transition={{type: "tween", duration: .3}}
                onMouseEnter={()=>{setIsDark(true)}}
                onMouseLeave={()=>{setIsDark(false)}}             
              >
                <MdDarkMode className="cursor-pointer" onClick={()=>{setLight(false)}} />
              </motion.div>
            </div>
            <div className="flex mr-3">
              <IoMdCode className="fill-red-700 w-5" style={{ opacity: light ? 1 : 0 }}/>
              <motion.div
                initial={{transform:"rotate(0)"}}
                animate={{transform: isLight ? "rotate(360deg)" : "rotate(0)"}}
                transition={{type: "tween", duration: .3}}
                onMouseEnter={()=>{setIsLight(true)}}
                onMouseLeave={()=>{setIsLight(false)}}
              >
                <MdLightMode className="cursor-pointer" onClick={()=>{setLight(true)}}/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Options;
