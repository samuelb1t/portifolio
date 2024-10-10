function bg({ children }: { children: React.ReactElement }) {
  return (
    <article className="bg-neutral-900 w-full h-full block rounded-3xl display-font text-3xl">
      {children}
    </article>
  );
}

export default bg;
