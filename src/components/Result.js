import styles from './Result.module.css';

function Result({ yearlyData }) {
  console.log(yearlyData);
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
        {yearlyData.length > 0 &&
          yearlyData.map((data) => {
            const { year, savingsEndOfYear, yearlyInterest, totalInterest, totalInvestedCapital } = data;
            return (
              <tr>
                <td>{year}</td>
                <td>{savingsEndOfYear}</td>
                <td>{yearlyInterest}</td>
                <td>{totalInterest}</td>
                <td>{totalInvestedCapital}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Result;
