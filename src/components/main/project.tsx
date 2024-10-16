import { IoIosArrowDown } from "react-icons/io";

function seta(){
    document.getElementById("arrow")?.classList.toggle('rotate-180');
    document.getElementById("hiddenText")?.classList.toggle("hidden");
}

function Project({title,text,hiddenText,img}:{title:string,text:string,hiddenText:string,img:string}) {
  return (
    <div className="grid text-neutral-200 bg-neutral-700 p-4 box-border rounded-xl">
      <img src={img} alt="Foto projeto" className="rounded-xl" />
      <h2 className="text-3xl">{title}</h2>
      <div className="flex items-center relative">
        <p className="text-base max-w-60">
          {text}
          <span className="hidden text-base" id="hiddenText">{hiddenText}</span>
        </p>
        <IoIosArrowDown className="h-8 w-8 rotate-180 fill-red-700 cursor-pointer transition-all absolute right-0 top-4" id="arrow" onClick={seta}/>
      </div>
    </div>
  );
}

export default Project;
