import { AnimatedBackground } from 'animated-backgrounds';

function bg({ children,id }: { children: React.ReactElement,id:string }) {
  return (
    <article className=" h-screen px-60 py-8" id={id}>
        <AnimatedBackground animationName="fireflies"/>
        <section className="bg-neutral-900 w-full h-full block rounded-3xl display-font text-3xl pt-12 pb-16 px-16">
          {children}
        </section>
      </article>
  );
}

export default bg;
  