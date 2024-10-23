import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";


function Project({id,title,text,hiddenText,img}:{id:string,title:string,text:string,hiddenText:string,img:string}) {
  
  const [isOpen, setIsOpen] = useState(false);

  function toggleContent() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="grid text-neutral-200 bg-neutral-700 p-4 box-border rounded-xl">
      <img src={img} alt="Foto projeto" className="rounded-xl" />
      <h2 className="text-3xl">{title}</h2>
      <div className="relative">
        <p className="text-base max-w-56 text-font">
          {text}
          <span id={`pontinhos${id}`} className={isOpen ? 'hidden' : ''}>   ...</span>
          <span className={`text-base ${isOpen ? '' : 'hidden'}`} id={`hiddenText-${id}`}>{hiddenText}</span>
        </p>
        <IoIosArrowDown className={`h-8 w-8 fill-red-700 cursor-pointer transition-all absolute right-0 top-4 ${isOpen ?'rotate-0':'rotate-180'}`} id={`arrow-${id}`} onClick={toggleContent}/>
      </div>
    </div>
  );
}

export default Project;
