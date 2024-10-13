function bg({ children }: { children: React.ReactElement }) {
  return (
    <article className="bg-neutral-900 w-full h-full block rounded-3xl display-font text-3xl pt-24 pb-14 ">
      {children}
    </article>
  );
}

export default bg;
