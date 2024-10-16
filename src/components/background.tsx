function bg({ children }: { children: React.ReactElement }) {
  return (
    <article className="bg h-screen px-60 py-8">
      <section className="bg-neutral-900 w-full h-full block rounded-3xl display-font text-3xl pt-12 pb-16 px-16">
        {children}
      </section>
    </article>
  );
}

export default bg;
  