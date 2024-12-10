
function bg({ children,id }: { children: React.ReactElement,id:string }) {
  return (
    <article className="bg h-screen px-4 md:px-8 xl:px-60 pb-16 pt-12 lg:py-8" id={id}>
        <section className="bg-neutral-900 w-full h-full block rounded-3xl display-font text-3xl pt-8 2xl:pt-36 pb-16 md:pb-20 2xl:pb-48 px-0 xl:px-12">
          {children}
        </section>  
      </article>
  );
}

export default bg;
  