function MainWrapper({
  children,
  maxWidth,
}: {
  children: React.ReactNode;
  maxWidth: "max-w-2xl" | "max-w-3xl" | "max-w-4xl";
}) {
  return <div className={`mx-auto ${maxWidth}`}>{children}</div>;
}

export default MainWrapper;
