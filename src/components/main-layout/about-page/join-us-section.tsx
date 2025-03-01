import { Section, SectionParagraph, SectionTitle } from "./section-blocks";

function JoinUsSection() {
  return (
    <Section>
      <SectionTitle>Join Us on This Delicious Adventure</SectionTitle>
      <SectionParagraph wrapBalance={false}>
        Whether you're a seasoned pizza pro or just starting out, we hope Slice
        of Life inspires you to create your own perfect pies. Remember, the best
        pizza is the one you make with love (and maybe a little bit of flour on
        your nose).
      </SectionParagraph>

      <div>
        <SectionParagraph wrapBalance={true} style="mb-1 font-semibold">
          Happy pizza making!
        </SectionParagraph>
        <SectionParagraph wrapBalance={true}>Natalia & Szymon</SectionParagraph>
      </div>
    </Section>
  );
}

export default JoinUsSection;
