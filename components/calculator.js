import { useState } from 'react';

const Calculator = () => {
  const [currentWealth, setCurrentWealth] = useState(10000); // Initial current wealth
  const [allocation, setAllocation] = useState(1000); // Initial allocation value
  const [isMonthly, setIsMonthly] = useState(true); // Allocation frequency
  const [yearsToGrow, setYearsToGrow] = useState(20); // Initial number of years
  const [interestRate, setInterestRate] = useState(9); // Initial interest rate (as a percentage)
  const [taxRate, setTaxRate] = useState(30); // Initial tax rate (as a percentage)
  const [currency, setCurrency] = useState("$"); // Default currency

  const formatCurrency = (amount) => {
    switch (currency) {
      case '£':
        return `£ ${amount.toFixed(2)}`;
      case '$':
        return `$ ${amount.toFixed(2)}`;
      case '€':
        return `${amount.toFixed(2)} €`;
      default:
        return amount.toFixed(2);
    }
  };

  // Calculate the final amount
  const calculateFinalAmount = () => {
    const frequency = isMonthly ? 12 : 1;
    const growthRate = 1 + (interestRate / 100 / frequency);
    const totalContributions = allocation * yearsToGrow;

    let wealth = currentWealth;
    for (let year = 0; year < yearsToGrow; year++) {
      wealth += allocation;
      wealth *= growthRate;
    }

    // Calculate tax at the end
    const taxAmount = (wealth - currentWealth - totalContributions) * (taxRate / 100);

    return formatCurrency(wealth);
  };

  return (
    <div className="calculator">
      <h2>Compound Interest Calculator</h2>
      <div className="input-field">
        <label>Current Wealth:</label>
        <input type="number" value={currentWealth} onChange={(e) => setCurrentWealth(parseFloat(e.target.value))} />
      </div>
      <div className="input-field">
        <label>Allocation Value:</label>
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
        <label>Interest Rate (%):</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
      </div>
      <div className="input-field">
        <label>Tax Rate (%):</label>
        <input type="number" value={taxRate} onChange={(e) => setTaxRate(parseFloat(e.target.value))} />
      </div>
      <div className="input-field">
        <label>Currency:</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="£">£ (GBP)</option>
          <option value="$">$ (USD)</option>
          <option value="€">€ (EUR)</option>
        </select>
      </div>
      <div className="result">
        <p>Final Amount : {calculateFinalAmount()}</p>
      </div>
    </div>
  );
};

export default Calculator;
