export function Section({ children }: { children: React.ReactNode }) {
  return <section className="grid gap-6">{children}</section>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-semibold">{children}</h2>;
}

export function SectionParagraph({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return <p className={`text-lg ${style}`}>{children}</p>;
}
