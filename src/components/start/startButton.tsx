import { useState } from "react";
import { IoMdCode } from "react-icons/io";

function Button({ texto,onClick}: { texto: string,onClick:()=>void }) {
  const [state, setState] = useState(false);
  return (
    <button
      className="text-neutral-200 border-2 border-solid border-neutral-200 rounded-2xl py-2 sm:py-4 px-5 sm:px-7"
      onMouseEnter={() => {
        setState(true);
      }}
      onMouseLeave={() => {
        setState(false);
      }}
      onClick={onClick}
    >
      <div className="flex justify-center relative pr-6 gap-1">
        <IoMdCode
          className="fill-red-700 w-6 self-end icon-transition"
          id="icone"
          style={{ opacity: state ? 1 : 0 }}
        />
        <span className="text-2xl sm:text-3xl">{texto}</span>
      </div>
    </button>
  );
}

export default Button;
