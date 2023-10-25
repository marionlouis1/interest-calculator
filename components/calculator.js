import { useState } from 'react';

const Calculator = () => {
  const [currentWealth, setCurrentWealth] = useState(10000); // Initial current wealth
  const [allocation, setAllocation] = useState(0.08); // Initial allocation rate
  const [isMonthly, setIsMonthly] = useState(true); // Allocation frequency
  const [yearsToGrow, setYearsToGrow] = useState(10); // Initial number of years
  const [interestRate, setInterestRate] = useState(0.06); // Initial interest rate
  const [taxRate, setTaxRate] = useState(0.15); // Initial tax rate

  // Calculate the final amount
  const calculateFinalAmount = () => {
    const frequency = isMonthly ? 12 : 1;
    const growthRate = 1 + (interestRate / frequency);
    const totalContributions = currentWealth * (allocation / frequency) * yearsToGrow;

    let wealth = currentWealth;
    for (let year = 0; year < yearsToGrow; year++) {
      wealth += (wealth * (allocation / frequency)) + (wealth * (interestRate / frequency));
      wealth -= (wealth * (taxRate / frequency));
    }

    return wealth - totalContributions;
  };

  return (
    <div className="calculator">
      <h2>Compound Interest Calculator</h2>
      <div className="input-field">
        <label>Current Wealth:</label>
        <input type="number" value={currentWealth} onChange={(e) => setCurrentWealth(parseFloat(e.target.value))} />
      </div>
      <div className="input-field">
        <label>Allocation Rate:</label>
        <input type="number" value={allocation} onChange={(e) => setAllocation(parseFloat(e.target.value))} />
        <label>
          <input type="checkbox" checked={isMonthly} onChange={() => setIsMonthly(!isMonthly)} />
          Monthly Allocation
        </label>
      </div>
      <div className="input-field">
        <label>Years to Grow:</label>
        <input type="number" value={yearsToGrow} onChange={(e) => setYearsToGrow(parseInt(e.target.value))} />
      </div>
      <div className="input-field">
        <label>Interest Rate:</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
      </div>
      <div className="input-field">
        <label>Tax Rate:</label>
        <input type="number" value={taxRate} onChange={(e) => setTaxRate(parseFloat(e.target.value))} />
      </div>
      <div className="result">
        <p>Final Amount: {calculateFinalAmount().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Calculator;
