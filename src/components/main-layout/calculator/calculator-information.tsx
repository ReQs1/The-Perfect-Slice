function calculatorInformation() {
  return (
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
          <li>Yeast: 0.06% for fresh yeast, or 0.02% for instant dry yeast</li>
        </ul>
        <p>
          To use the calculator, simply input the number of dough balls you want
          to make and the weight of each ball. Select the type of yeast you're
          using, and the calculator will adjust the measurements accordingly.
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
  );
}

export default calculatorInformation;
