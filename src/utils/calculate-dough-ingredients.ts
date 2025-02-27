import { YeastType } from "../redux-slices/calculator-slice";

export function calculateDoughIngredients({
  gramsPerBall,
  numberOfPizzas,
  yeastType,
}: {
  gramsPerBall: number;
  numberOfPizzas: number;
  yeastType: YeastType;
}) {
  // Total target dough weight
  const totalDoughWeight = gramsPerBall * numberOfPizzas;

  // Calculate flour (base of 100%)
  // 1.64 comes from: flour(100%) + water(61%) + salt(3%) + yeast(negligible)
  const flour = totalDoughWeight / 1.64;

  // Calculate other ingredients as percentage of flour weight
  const water = flour * 0.61; // 61% of flour weight
  const salt = flour * 0.03; // 3% of flour weight
  const yeast = flour * (yeastType === "fresh" ? 0.0006 : 0.0002); // 0.06% fresh or 0.02% instant

  // Format for display
  const formattedIngredients = {
    flour: formatGrams(flour),
    water: formatGrams(water),
    salt: formatGrams(salt),
    yeast: `${yeast.toFixed(2)}g`,
  };

  return formattedIngredients;
}

function formatGrams(value: number) {
  return `${Math.round(value)}g`;
}
