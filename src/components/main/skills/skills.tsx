import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="grid sm:grid-cols-[1fr_auto] px-4 sm:px-0 2xl:px-12 md:gap-8 lg:gap-14 2xl:gap-32 mt-12 2xl:mt-28">
      <div className="order-2 sm:order-1">
        <h1 className="text-neutral-950 dark:text-neutral-200 text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl mb-2 md:mb-4 lg:mb-2 2xl:mb-12">
          {t("tecnologias")}
          <span className="text-red-700 text-5xl xl:text-7xl 2xl:text-9xl sm:leading-10">
            .
          </span>
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-y-8 md:gap-y-4 lg:gap-y-8 2xl:gap-y-16 mt-4 sm:mt-8">
          <div className="flex flex-col items-center">
            <FaHtml5 className="fill-neutral-950 dark:fill-neutral-200 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-36 2xl:h-36"></FaHtml5>
            <span className="text-neutral-950 dark:text-neutral-200 text-sm md:text-lg 2xl:text-4xl">
              HTML
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="fill-neutral-950 dark:fill-neutral-200 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-36 2xl:h-36"></FaCss3Alt>
            <span className="text-neutral-950 dark:text-neutral-200 text-sm md:text-lg 2xl:text-4xl">
              CSS
            </span>
          </div>
          <div className="flex flex-col items-center">
            <IoLogoJavascript className="fill-neutral-950 dark:fill-neutral-200 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-36 2xl:h-36"></IoLogoJavascript>
            <span className="text-neutral-950 dark:text-neutral-200 text-sm md:text-lg 2xl:text-4xl">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="fill-neutral-950 dark:fill-neutral-200 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-36 2xl:h-36"></FaReact>
            <span className="text-neutral-950 dark:text-neutral-200 text-sm md:text-lg 2xl:text-4xl">
              React
            </span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="fill-neutral-950 dark:fill-neutral-200 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-36 2xl:h-36"></SiTypescript>
            <span className="text-neutral-950 dark:text-neutral-200 text-sm md:text-lg 2xl:text-4xl">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaJava className="fill-neutral-950 dark:fill-neutral-200 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-36 2xl:h-36"></FaJava>
            <span className="text-neutral-950 dark:text-neutral-200 text-sm md:text-lg 2xl:text-4xl">
              Java
            </span>
          </div>
          <div className="flex flex-col items-center">
            <RiTailwindCssFill className="fill-neutral-950 dark:fill-neutral-200 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-36 2xl:h-36"></RiTailwindCssFill>
            <span className="text-neutral-950 dark:text-neutral-200 text-sm md:text-lg 2xl:text-4xl">
              Tailwind
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="fill-neutral-950 dark:fill-neutral-200 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-36 2xl:h-36"></FaGithub>
            <span className="text-neutral-950 dark:text-neutral-200 text-sm md:text-lg 2xl:text-4xl">
              GitHub
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt className="fill-neutral-950 dark:fill-neutral-200 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 2xl:w-36 2xl:h-36"></FaGitAlt>
            <span className="text-neutral-950 dark:text-neutral-200 text-sm md:text-lg 2xl:text-4xl">
              Git
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-neutral-800 dark:text-neutral-200 sm:text-[#E2DAD6] sm:dark:text-neutral-800 text-4xl md:text-6xl xl:text-7xl 2xl:text-9xl leading-none md:max-w-20 xl:max-w-28 2xl:max-w-40  md:break-words order-1 sm:order-2">
      {t("skills")} 
      </h1>
    </section>
  );
}

export default Skills;
