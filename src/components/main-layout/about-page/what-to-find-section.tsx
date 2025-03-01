import { Section, SectionTitle } from "./section-blocks";

function WhatToFindSection() {
  return (
    <Section>
      <SectionTitle>What You'll Find Here</SectionTitle>
      <ul className="list-disc space-y-2 pl-5 text-lg">
        <li>Our favorite pizza recipes and topping combinations</li>
        <li>Tips and tricks for perfecting your dough</li>
        <li>Reviews of pizza making equipment and pizza places</li>
        <li>Stories from our pizza experiments (including the failures!)</li>
        <li>A community of fellow pizza enthusiasts</li>
      </ul>
    </Section>
  );
}

export default WhatToFindSection;
