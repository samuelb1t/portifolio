"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import ProjectCard from "../main/projects/3dCard";
import { cards } from "./cards";

export function ExpandCard() {
  const [active, setActive] = useState<(typeof cards)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }


    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel",()=>{setActive(null)})
    return () => window.removeEventListener("keydown", onKeyDown);

  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <img src={active.src} alt={active.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-neutral-700 dark:text-neutral-200 text-base">{active.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-base">{active.description}</p>
                <div className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400">
                  {typeof active.content === "function" ? active.content() : active.content}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="grid grid-cols-3 items-start gap-6">
        {/* max-w-2xl mx-auto w-full grid grid-cols-3 items-start gap-4 */}
        {cards.map((card) => (
          <motion.div
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
          >
            <ProjectCard title={card.title} img={card.src} /> {/* Pass title and src */}
          </motion.div>
        ))}
      </ul>
    </>
  );
}
