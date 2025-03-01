import { createFileRoute } from "@tanstack/react-router";
import MainWrapper from "../../../components/main-layout/main-wrapper";
import Paragraph from "../../../components/main-layout/about-page/paragraph-text";

export const Route = createFileRoute("/(main-app)/_main-layout/about")({
  component: About,
});

//TODO: change placeholder text

function About() {
  return (
    <MainWrapper maxWidth="max-w-4xl">
      <h1 className="mb-8 text-center text-4xl font-bold">Our Pizza Journey</h1>
      <div className="grid gap-12">
        {/* who are we */}
        <section className="grid gap-6">
          <img
            className="max-h-[450px] w-full rounded-lg"
            loading="lazy"
            src="/about-page/header-image.webp"
            alt="Neapolitan pizza with wood fired oven in the background"
          />
          <div className="grid gap-4">
            <Paragraph>
              Hey there! We're Natalia and Szymon, the pizza-obsessed couple
              behind Slice of Life. Our journey into the world of homemade pizza
              began on a rainy Saturday night in our tiny apartment kitchen.
            </Paragraph>
            <Paragraph>
              What started as a fun date night activity quickly turned into a
              shared passion. We found ourselves experimenting with different
              flours, perfecting our dough-stretching technique, and debating
              the merits of various toppings combinations.
            </Paragraph>
          </div>
        </section>

        {/* why started the blog */}
        <section className="grid gap-6">
          <h2 className="text-3xl font-semibold">Why we Started This Blog</h2>
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="grid w-full gap-4 sm:w-1/2">
              <Paragraph>
                We believe that the best pizzas are made with love, patience,
                and high-quality ingredients. Our approach combines traditional
                techniques with modern twists, always striving for that perfect
                balance of flavors and textures.
              </Paragraph>
              <Paragraph>
                From hand-kneading our dough to sourcing the freshest local
                toppings, every step of our pizza-making process is a labor of
                love. And we're excited to share all we've learned with you!
              </Paragraph>
            </div>

            <div className="w-full sm:w-1/2">
              <img
                className="max-h-[300px] w-full rounded-lg"
                src="/about-page/why-started-image.webp"
                alt="Pizza from Neapolska Częstochowa"
              />
            </div>
          </div>
        </section>

        {/* our philosophy */}
        <section className="grid gap-6">
          <h2 className="text-3xl font-semibold">Our Pizza Philosophy</h2>
          <div className="flex flex-col gap-6 sm:flex-row-reverse">
            <div className="grid w-full gap-4 sm:w-1/2">
              <Paragraph>
                We believe that the best pizzas are made with love, patience,
                and high-quality ingredients. Our approach combines traditional
                techniques with modern twists, always striving for that perfect
                balance of flavors and textures.
              </Paragraph>
              <Paragraph>
                From hand-kneading our dough to sourcing the freshest local
                toppings, every step of our pizza-making process is a labor of
                love. And we're excited to share all we've learned with you!
              </Paragraph>
            </div>

            <div className="w-full sm:w-1/2">
              <img
                className="max-h-[300px] w-full rounded-lg object-cover"
                src="/about-page/pizza-philosophy-image.webp"
                alt="Pizza from Miedziany Piec Częstochowa"
              />
            </div>
          </div>
        </section>

        {/* what you will find */}
        <section className="grid gap-6">
          <h2 className="text-3xl font-semibold">What You'll Find Here</h2>
          <ul className="list-disc space-y-2 pl-5 text-lg">
            <li>Our favorite pizza recipes and topping combinations</li>
            <li>Tips and tricks for perfecting your dough</li>
            <li>Reviews of pizza making equipment and pizza places</li>
            <li>
              Stories from our pizza experiments (including the failures!)
            </li>
            <li>A community of fellow pizza enthusiasts</li>
          </ul>
        </section>

        {/* join us */}
        <section className="grid gap-6">
          <h2 className="text-3xl font-semibold">
            Join Us on This Delicious Adventure
          </h2>
          <Paragraph>
            Whether you're a seasoned pizza pro or just starting out, we hope
            Slice of Life inspires you to create your own perfect pies.
            Remember, the best pizza is the one you make with love (and maybe a
            little bit of flour on your nose).
          </Paragraph>

          <div>
            <p className="mb-1 text-lg font-semibold">Happy pizza making!</p>
            <p className="text-lg">Natalia & Szymon</p>
          </div>
        </section>
      </div>
    </MainWrapper>
  );
}
