import { useState } from "react";
import { IoMdCode } from "react-icons/io";

function Button({ texto }: { texto: string }) {
  const [state, setState] = useState(false);
  return (
    <button
      className="text-neutral-200 border-2 border-solid border-neutral-200 rounded-2xl py-4 px-7"
      onMouseEnter={() => {
        setState(true);
      }}
      onMouseLeave={() => {
        setState(false);
      }}
    >
      <div className="flex justify-center relative pr-4">
        <IoMdCode
          className="fill-red-700 w-6 self-end icon-transition"
          id="icone"
          style={{ opacity: state ? 1 : 0 }}
        />
        {texto}
      </div>
    </button>
  );
}

export default Button;
