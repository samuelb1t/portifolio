"use client";
import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { cn } from "../../lib/utils";
import { IoMdCode } from "react-icons/io";

export function Form() {
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-2  shadow-input">
      <form className="grid gap-4" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="31315395-dc2f-453c-9ec7-683cc43d0476" />
        <LabelInputContainer>
            <Label htmlFor="fullname">Nome completo</Label>
            <Input id="fullname" placeholder="Digite seu nome" type="text" name="name" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="exemplo@gmail.com" type="email" name="email"/>
        </LabelInputContainer>
        <LabelInputContainer>  
          <Label htmlFor="mensagem">Mensagem</Label>
          <Textarea placeholder="Digite sua mensagem" name="message"></Textarea>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black to-neutral-600 dark:from-zinc-700 dark:to-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center gap-1"
          type="submit"   
        >
          <IoMdCode className="fill-red-700 w-5"/>
          Enviar
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
