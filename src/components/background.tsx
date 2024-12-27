
function bg({ children,id }: { children: React.ReactElement,id:string }) {
  return (
    <article className="bg min-h-screen lg:min-h-0 lg:h-screen px-5 md:px-8 xl:px-52 py-8 md:py-12 xl:py-8" id={id}>
      <section className="bg-neutral-900 rounded-3xl display-font min-h-[80vh] lg:h-full py-4 xl:py-6 px-2 md:px-8 xl:px-12">
        {children}
      </section>
    </article>
  );
}

export default bg;
  