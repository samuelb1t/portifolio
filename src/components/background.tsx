
function bg({ children,id }: { children: React.ReactElement,id:string }) {
  return (
    <article className="bg h-screen px-4 sm:px-60 py-4 sm:py-8" id={id}>
        <section className="bg-neutral-900 w-full h-full block rounded-3xl display-font text-3xl pt-12 pb-16 px-0 sm:px-12">
          {children}
        </section>
      </article>
  );
}

export default bg;
  