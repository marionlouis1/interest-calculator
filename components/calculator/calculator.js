import { useState, useEffect } from 'react';
import WealthChart from './wealthChart'; // Assuming you have a WealthChart component

function Calculator() {
  const [currentWealth, setCurrentWealth] = useState(10000);
  const [allocation, setAllocation] = useState(1000);
  const [isMonthly, setIsMonthly] = useState(true);
  const [yearsToGrow, setYearsToGrow] = useState(20);
  const [interestRate, setInterestRate] = useState(9);
  const [taxRate, setTaxRate] = useState(30);
  const [currency, setCurrency] = useState("$");
  const [chartData, setChartData] = useState(null);

  const formatCurrency = (amount, userCurrency) => {
    let cur = "USD";
    switch (userCurrency) {
      case "€":
        cur = "EUR";
        break;
      case "£":
        cur = "GBP";
        break;
      case "$":
        cur = "USD";
        break;
      default:
        cur = "USD";
        break;
    }

    const options = {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: 0,
    };

    return amount.toLocaleString('en-US', options);
  };

  const calculateFinalAmount = () => {
    const frequency = isMonthly ? 12 : 1;
    const growthRate = 1 + interestRate / 100;
    const totalContributions = allocation * yearsToGrow * frequency;

    let wealth = currentWealth;
    let date = new Date();
    for (let year = date.getFullYear(); year < date.getFullYear()+ yearsToGrow; year++) {
      wealth += allocation * frequency;
      wealth *= growthRate;
    }

    const taxAmount = (wealth - currentWealth - totalContributions) * (taxRate / 100);

    const formattedTotalContributions = formatCurrency(totalContributions, currency);
    const formattedFinalAmount = formatCurrency(wealth, currency);

    return [formattedFinalAmount, formattedTotalContributions];
  };

  

  const calculateWealthOverTime = () => {
    const frequency = isMonthly ? 12 : 1;
    const growthRate = 1 + interestRate / 100;
    const totalContributions = allocation * yearsToGrow * frequency;
    const labels = [];
    const contributionsData = [];
    const wealthData = [];

    let wealth = currentWealth;
    let date = new Date();
    for (let year = date.getFullYear(); year <= yearsToGrow+ date.getFullYear(); year++) {
      let i=0;
      labels.push(year);
      contributionsData.push(currentWealth + (year-date.getFullYear())*allocation*frequency);
      wealthData.push(wealth);
      wealth += allocation * frequency;
      wealth *= growthRate;
      i+=1;
    }

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Total Contributions',
          data: contributionsData,
          fill: false,
          borderColor: 'rgba(255, 0, 0, 0.6)',
        },
        {
          label: 'Wealth Over Time',
          data: wealthData,
          fill: false,
          borderColor: 'rgba(0, 0, 255, 0.6)',
        },
      ],
    };

    setChartData(chartData);
  };

  useEffect(() => {
    calculateWealthOverTime();
  }, [currentWealth, allocation, isMonthly, yearsToGrow, interestRate]);

  return (
    <div className='toolContainer'>
    <div className="calculator">
      <h2>Project your wealth in years</h2>
      <div className="input-field">
        <label>Current Wealth:</label>
        <input
          type="number"
          value={currentWealth}
          onChange={(e) => setCurrentWealth(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-field">
        <label>Allocation Value:</label>
        <input
          type="number"
          value={allocation}
          onChange={(e) => setAllocation(parseFloat(e.target.value))}
        />
        <label>
          <input
            type="checkbox"
            checked={isMonthly}
            onChange={() => setIsMonthly(!isMonthly)}
          />
          Monthly Allocation
        </label>
      </div>
      <div className="input-field">
        <label>Years to Grow:</label>
        <input
          type="number"
          value={yearsToGrow}
          onChange={(e) => setYearsToGrow(parseInt(e.target.value))}
        />
      </div>
      <div className="input-field">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-field">
        <label>Tax Rate (%):</label>
        <input
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(parseFloat(e.target.value))}
        />
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
        <p>Total Contributions : {calculateFinalAmount()[1]}</p>
        <p>Final Amount : {calculateFinalAmount()[0]}</p>
      </div>

    </div>
          {/* Conditionally render WealthChart, contains it's own div named 'chart'*/}
          {chartData && <WealthChart data={chartData} />}
    </div>
  );
}

export default Calculator;
