import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main-app)/_main-layout/calculator")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-3xl font-bold">Pizza Dough Calculator</h1>
      <div className="mb-10 space-y-6 rounded-lg bg-gray-100 p-6">
        <div className="grid gap-4">
          <h2 className="text-xl font-semibold">How to Use This Calculator</h2>
          <p>
            This calculator is tailored to my preffered Neapolitan pizza dough
            recipe. Here's how the ingredients are proportioned:
          </p>
          <ul className="list-disc pl-5">
            <li>Flour: 100% (base for all other percentages)</li>
            <li>Water: 59%</li>
            <li>Salt: 3%</li>
            <li>
              Yeast: 0.06% for fresh yeast, or 0.02% for instant dry yeast
            </li>
          </ul>
          <p>
            To use the calculator, simply input the number of dough balls you
            want to make and the weight of each ball. Select the type of yeast
            you're using, and the calculator will adjust the measurements
            accordingly.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">My Fermentation Process:</h3>
          <ol className="list-decimal pl-5">
            <li>Knead the dough thoroughly</li>
            <li>Let it rest for 30 minutes</li>
            <li>Stretch the block of dough</li>
            <li>Rest for another 30 minutes</li>
            <li>Divide into individual dough balls</li>
            <li>
              Place in containers and leave at room temperature for 24 hours
            </li>
          </ol>
        </div>
      </div>

      <div className="grid gap-8 rounded-lg bg-white p-6 shadow-md">
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
              value={1}
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
              value={250}
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
            >
              <option value="fresh">Fresh Yeast</option>
              <option value="instant">Instant Dry Yeast</option>
            </select>
          </div>
        </div>

        {/* TODO: add ingredients div */}
        <div></div>
      </div>
    </div>
  );
}
