import { IoMdCode } from "react-icons/io";
import { useState } from "react";


function menuItem({href,text,i}:{href:string,text:string,i:number}){
    const [mouseOn,setMouseOn] = useState(false);

    function toggleMenuHover(){
        setMouseOn(!mouseOn);
    }

    const vh = window.innerHeight;
    console.log(i * vh)
    return(
        <li className="grid menu-columns gap-2 items-center relative after:content-[''] after:bg-slate-200 after:h-0.5 after:absolute after:-bottom-1"
        style={{'--after-width': mouseOn ? '100%' : '0'} as React.CSSProperties}
        onMouseEnter={toggleMenuHover}
        onMouseLeave={toggleMenuHover}
        >
            <IoMdCode className="fill-red-700 w-6 self-end icon-transition" style={{opacity: window.innerHeight == i * vh ? 1 : 0}} id="icone"/>
        <a href={href}
        >{text}</a>
        <IoMdCode className="fill-red-700 w-6 self-end icon-transition opacity-0" id="icone"/>
      </li>
    )
}

export default menuItem;