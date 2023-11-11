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
    for (let year = date.getFullYear(); year < date.getFullYear() + yearsToGrow; year++) {
      wealth += allocation * frequency;
      wealth *= growthRate;
    }

    const taxAmount = (wealth - currentWealth - totalContributions) * (taxRate / 100);

    const formattedTotalContributions = formatCurrency(totalContributions, currency);
    const formattedFinalAmount = formatCurrency(wealth, currency);
    const formattedInterests = formatCurrency(wealth - totalContributions, currency);

    return [formattedFinalAmount, formattedTotalContributions, formattedInterests];
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
    for (let year = date.getFullYear(); year <= yearsToGrow + date.getFullYear(); year++) {
      let i = 0;
      labels.push(year);
      contributionsData.push(currentWealth + (year - date.getFullYear()) * allocation * frequency);
      wealthData.push(wealth);
      wealth += allocation * frequency;
      wealth *= growthRate;
      i += 1;
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
    <div className="tool-wrapper bg-gray-100 min-h-screen flex flex-wrap">
      <div className="calculator bg-white w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Project your wealth in years</h2>
        <div className="input-field mb-6">
          <label className="block font-bold mb-2">Current Wealth:</label>
          <input
            type="number"
            value={currentWealth}
            onChange={(e) => setCurrentWealth(parseFloat(e.target.value))}
            className="w-full border-b-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="input-field text mb-6">
          <label className="block font-bold mb-2">Allocation Value:</label>
          <input
            type="number"
            value={allocation}
            onChange={(e) => setAllocation(parseFloat(e.target.value))}
            className="w-full border-b-2 focus:outline-none focus:border-blue-500"
          />
          <label className="block mt-2">
            Monthly Allocation
            <input
              type="checkbox"
              checked={isMonthly}
              onChange={() => setIsMonthly(!isMonthly)}
              className="ml-2"
            />
          </label>
        </div>
        <div className="input-field mb-6">
          <label className="block font-bold mb-2">Years to Grow:</label>
          <input
            type="number"
            value={yearsToGrow}
            onChange={(e) => setYearsToGrow(parseInt(e.target.value))}
            className="w-full border-b-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="input-field mb-6">
          <label className="block font-bold mb-2">Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            className="w-full border-b-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="input-field mb-6">
          <label className="block font-bold mb-2">Tax Rate (%):</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(parseFloat(e.target.value))}
            className="w-full border-b-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="input-field mb-6">
          <label className="block font-bold mb-2">Currency:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full border-b-2 focus:outline-none focus:border-blue-500"
          >
            <option value="£">£ (GBP)</option>
            <option value="$">$ (USD)</option>
            <option value="€">€ (EUR)</option>
          </select>
        </div>
      </div>
      <div className="chart bg-white w-full md:w-1/2 md:min-h-full p-6">
        {chartData && <WealthChart data={chartData} />}
      </div>
      <div className="result w-full p-6">
        <p className="text-center">
          Your final wealth will be <b>{calculateFinalAmount()[0]}</b> after {yearsToGrow} years. It will be composed of{" "}
          <b>{calculateFinalAmount()[1]}</b> in contributions and <b>{calculateFinalAmount()[2]}</b> in interest.
        </p>
      </div>
    </div>
  );
}

export default Calculator;
