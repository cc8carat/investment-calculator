import { formatter } from '../utils/fomatter';

import styles from './Result.module.css';

function Result({ yearlyData }) {
  yearlyData.length > 0 && yearlyData.map((data) => <div></div>);

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.length === 0 && <div>No data is available</div>}
        {yearlyData.length > 0 &&
          yearlyData.map((data) => {
            const { year, savingsEndOfYear, yearlyInterest, totalInterest, totalInvestedCapital } = data;
            return (
              <tr key={year}>
                <td>{year}</td>
                <td>{formatter.format(savingsEndOfYear)}</td>
                <td>{formatter.format(yearlyInterest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestedCapital)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Result;
