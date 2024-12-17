
function bg({ children,id }: { children: React.ReactElement,id:string }) {
  return (
    <article className="bg h-screen min-h-fit sm:min-h-0 px-4 md:px-8 xl:px-52 2xl:px-64 p-12 lg:py-8" id={id}>
        <section className="bg-neutral-900 min-h-full sm:min-h-0 sm:h-full sm:w-full block rounded-3xl display-font text-3xl sm:pt-8 md:pt-[1.5rem] 2xl:pt-24 pb-8 md:pb-20 2xl:pb-48 px-2 md:px-8 xl:px-12">
          {children}
        </section>  
      </article>
  );
}

export default bg;
  