import { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [yearlyData, setYearlyData] = useState({});

  const calculateHandler = (userInput) => {
    setYearlyData(userInput);
  };

  const resultData = []; // per-year results
  const currentSavings = +yearlyData['current-savings'];
  const duration = +yearlyData.duration;
  const interestRate = +yearlyData['expected-return'] / 100;
  const yearlyContribution = +yearlyData['yearly-contribution'];
  // The below code calculates yearly results (total savings, interest etc)

  let totalSavings = currentSavings;
  let totalInterest = 0;
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = totalSavings * interestRate;
    totalSavings += yearlyInterest + yearlyContribution;
    totalInterest += yearlyInterest;
    const totalInvestedCapital = currentSavings + i * yearlyContribution;
    resultData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      savingsEndOfYear: totalSavings,
      yearlyInterest,
      totalInterest,
      totalInvestedCapital,
    });
  }

  return (
    <div>
      <Header />
      <Form calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Result yearlyData={resultData} />
    </div>
  );
}

export default App;
