import { Section, SectionParagraph, SectionTitle } from "./section-blocks";

function WhyStartedSection() {
  return (
    <Section>
      <SectionTitle>Why we Started This Blog</SectionTitle>
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="grid w-full gap-4 sm:w-1/2">
          <SectionParagraph>
            We believe that the best pizzas are made with love, patience, and
            high-quality ingredients. Our approach combines traditional
            techniques with modern twists, always striving for that perfect
            balance of flavors and textures.
          </SectionParagraph>
          <SectionParagraph>
            From hand-kneading our dough to sourcing the freshest local
            toppings, every step of our pizza-making process is a labor of love.
            And we're excited to share all we've learned with you!
          </SectionParagraph>
        </div>

        <div className="w-full sm:w-1/2">
          <img
            className="max-h-[300px] w-full rounded-lg"
            src="/about-page/why-started-image.webp"
            alt="Pizza from Neapolska Częstochowa"
          />
        </div>
      </div>
    </Section>
  );
}

export default WhyStartedSection;
