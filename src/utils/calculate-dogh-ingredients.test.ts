import { expect, test } from "vitest";
import { calculateDoughIngredients } from "./calculate-dough-ingredients";

test("calculates dough recipe for 10 pizzas, 270g each and instant dry yeast", () => {
  expect(
    calculateDoughIngredients({
      gramsPerBall: 270,
      numberOfPizzas: 10,
      yeastType: "instant",
    }),
  ).toStrictEqual({
    flour: "1646g",
    water: "1004g",
    salt: "49g",
    yeast: "0.33g",
  });
});

test("calculates dough recipe for 6 pizzas, 270g each and fresh yeast", () => {
  expect(
    calculateDoughIngredients({
      gramsPerBall: 270,
      numberOfPizzas: 6,
      yeastType: "fresh",
    }),
  ).toStrictEqual({
    flour: "988g",
    water: "603g",
    salt: "30g",
    yeast: "0.59g",
  });
});

test("dough recipe for 1 pizza to be defined", () => {
  expect(
    calculateDoughIngredients({
      gramsPerBall: 250,
      numberOfPizzas: 1,
      yeastType: "fresh",
    }),
  ).toBeDefined();
});
