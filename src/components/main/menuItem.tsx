import { IoMdCode } from "react-icons/io";
import { useEffect, useState } from "react";

function MenuItem({
  href,
  text,
  targetSectionId,
}: {
  href: string;
  text: string;
  targetSectionId: string;
}) {
  const [mouseOn, setMouseOn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function toggleMenuHover() {
    setMouseOn(!mouseOn);
  }

  useEffect(() => {
    const targetSection = document.getElementById(targetSectionId);
    
    if (!targetSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(targetSection);

    return () => {
      observer.unobserve(targetSection);
    };
  }, [targetSectionId]);

  return (
    <li
      className="grid menu-columns gap-2 items-center relative after:content-[''] after:bg-slate-200 after:h-0.5 after:absolute after:-bottom-1"
      style={{ "--after-width": mouseOn ? "100%" : "0" } as React.CSSProperties}
      onMouseEnter={toggleMenuHover}
      onMouseLeave={toggleMenuHover}
    >
      <IoMdCode
        className="fill-red-700 w-6 self-end icon-transition"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
      />
      <a href={href}>{text}</a>
      <IoMdCode
        className="fill-red-700 w-6 self-end icon-transition opacity-0"
      />
    </li>
  );
}

export default MenuItem;
