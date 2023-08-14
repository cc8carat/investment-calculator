import { useState } from 'react';

import Button from './Button';

import styles from './Form.module.css';

function Form({ calculateHandler }) {
  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlySavings, setYearlySavings] = useState('');
  const [rate, setRate] = useState('');
  const [duration, setDuration] = useState('');

  const changeHandler = (e, stateUpdateFn) => {
    stateUpdateFn(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputData = {
      currentSavings: +currentSavings,
      yearlySavings: +yearlySavings,
      rate: +rate / 100,
      duration: +duration,
    };
    calculateHandler(inputData);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            onChange={(e) => {
              changeHandler(e, setCurrentSavings);
            }}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            onChange={(e) => {
              changeHandler(e, setYearlySavings);
            }}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='expected-return'>Expected Interest (%, per year)</label>
          <input
            type='number'
            id='expected-return'
            onChange={(e) => {
              changeHandler(e, setRate);
            }}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            onChange={(e) => {
              changeHandler(e, setDuration);
            }}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <Button type={'reset'} label={'Reset'} color={'buttonAlt'} />
        <Button type={'submit'} label={'Calculate'} color={'button'} />
      </p>
    </form>
  );
}

export default Form;
