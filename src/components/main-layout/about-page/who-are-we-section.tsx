import { Section, SectionParagraph } from "./section-blocks";

function WhoAreWeSection() {
  return (
    <Section>
      <img
        className="max-h-[450px] w-full rounded-lg"
        loading="lazy"
        src="/about-page/header-image.webp"
        alt="Neapolitan pizza with wood fired oven in the background"
      />
      <div className="grid gap-4">
        <SectionParagraph>
          Hey there! We're Natalia and Szymon, the pizza-obsessed couple behind
          Slice of Life. Our journey into the world of homemade pizza began on a
          rainy Saturday night in our tiny apartment kitchen.
        </SectionParagraph>
        <SectionParagraph>
          What started as a fun date night activity quickly turned into a shared
          passion. We found ourselves experimenting with different flours,
          perfecting our dough-stretching technique, and debating the merits of
          various toppings combinations.
        </SectionParagraph>
      </div>
    </Section>
  );
}

export default WhoAreWeSection;
