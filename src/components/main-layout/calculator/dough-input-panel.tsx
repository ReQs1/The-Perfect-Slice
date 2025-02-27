import { Droplet, Wheat } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxHooks";
import {
  changeGramsPerBall,
  changeNumerOfPizzas,
  changeYeastType,
  YeastType,
} from "../../../redux-slices/calculator-slice";
import { SaltIcon, YeastIcon } from "../../custom-icons";
import { calculateDoughIngredients } from "../../../utils/calculate-dough-ingredients";

export default function DoughInputPanel() {
  return (
    <div className="grid gap-8 rounded-lg bg-white p-6 shadow-md">
      <CalculatorInputs />

      <CalculatorOutput />
    </div>
  );
}

function CalculatorInputs() {
  const { numberOfPizzas, gramsPerBall, yeastType } = useAppSelector(
    (state) => state.calculator,
  );
  const dispatch = useAppDispatch();

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="numberOfBalls"
        >
          Number of Dough Balls
        </label>
        <input
          className="rounded-md border-gray-300 px-2 py-1 shadow-sm"
          type="number"
          id="numberOfBalls"
          min={1}
          value={numberOfPizzas}
          onChange={(e) =>
            dispatch(changeNumerOfPizzas(Number(e.target.value)))
          }
        />
      </div>

      <div className="grid gap-2">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="gramsPerBall"
        >
          Grams per Ball
        </label>
        <input
          className="rounded-md border-gray-300 px-2 py-1 shadow-sm"
          type="number"
          id="gramsPerBall"
          min={1}
          max={300}
          value={gramsPerBall}
          onChange={(e) => dispatch(changeGramsPerBall(Number(e.target.value)))}
        />
      </div>

      <div className="grid gap-2">
        <label
          className="text-sm font-medium text-gray-700"
          htmlFor="yeastType"
        >
          Yeast Type
        </label>
        <select
          className="rounded-md border-gray-300 px-2 py-1 shadow-sm"
          id="yeastType"
          value={yeastType}
          onChange={(e) =>
            dispatch(changeYeastType(e.target.value as YeastType))
          }
        >
          <option value="fresh">Fresh Yeast</option>
          <option value="instant">Instant Dry Yeast</option>
        </select>
      </div>
    </div>
  );
}

function CalculatorOutput() {
  const { gramsPerBall, numberOfPizzas, yeastType } = useAppSelector(
    (state) => state.calculator,
  );

  const { flour, water, salt, yeast } = calculateDoughIngredients({
    gramsPerBall,
    numberOfPizzas,
    yeastType,
  });

  const yeastLabel =
    yeastType === "fresh" ? "Fresh Yeast" : "Instant Dry Yeast";

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Ingredients:</h3>
      <div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Wheat /> Flour: {flour}
          </li>
          <li className="flex items-center gap-2">
            <Droplet /> Water: {water}
          </li>
          <li className="flex items-center gap-2">
            <SaltIcon /> Salt: {salt}
          </li>
          <li className="flex items-center gap-2">
            <YeastIcon /> Yeast ({yeastLabel}): {yeast}
          </li>
        </ul>
      </div>
    </div>
  );
}
