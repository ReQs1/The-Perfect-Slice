import { createFileRoute } from "@tanstack/react-router";
import JoinUsSection from "../../../components/main-layout/about-page/join-us-section";
import OurPhilosophySection from "../../../components/main-layout/about-page/our-philosophy-section";
import WhatToFindSection from "../../../components/main-layout/about-page/what-to-find-section";
import WhoAreWeSection from "../../../components/main-layout/about-page/who-are-we-section";
import WhyStartedSection from "../../../components/main-layout/about-page/why-started-section";
import MainWrapper from "../../../components/main-layout/main-wrapper";

export const Route = createFileRoute("/(main-app)/_main-layout/about")({
  component: About,
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Learn about us, the pizza-obsessed couple behind Slice of Life pizza blog, and our journey into the world of homemade pizza.",
      },
      { title: "About Us | Slice of Life Pizza Blog" },
      { property: "og:title", content: "About Us | Slice of Life Pizza Blog" },
      {
        property: "og:description",
        content:
          "Learn about us, the pizza-obsessed couple behind Slice of Life pizza blog, and our journey into the world of homemade pizza.",
      },
      {
        property: "og:image",
        content: "https://perfectslice.netlify.app/og/og_about.png",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://perfectslice.netlify.app/about" },
    ],
  }),
});

//TODO: change placeholder text in each section

function About() {
  return (
    <MainWrapper maxWidth="max-w-4xl">
      <h1 className="mb-8 text-center text-4xl font-bold">Our Pizza Journey</h1>
      <div className="grid gap-12">
        <WhoAreWeSection />

        <WhyStartedSection />

        <OurPhilosophySection />

        <WhatToFindSection />

        <JoinUsSection />
      </div>
    </MainWrapper>
  );
}
