import { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [yearlyData, setYearlyData] = useState({});
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const { currentSavings, yearlySavings, rate, duration } = userInput;
    const yearlyData = []; // per-year results

    // The below code calculates yearly results (total savings, interest etc)
    let totalSavings = currentSavings;
    let totalInterest = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = totalSavings * rate;
      totalSavings += yearlyInterest + yearlySavings;
      totalInterest += yearlyInterest;
      const totalInvestedCapital = currentSavings + i * yearlySavings;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: totalSavings,
        yearlyInterest,
        totalInterest,
        totalInvestedCapital,
      });
    }
    setYearlyData(yearlyData);
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <Form calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Result yearlyData={yearlyData} />
    </div>
  );
}

export default App;
