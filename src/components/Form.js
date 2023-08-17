import { useState } from 'react';

import Button from './Button';

import styles from './Form.module.css';

const initalState = {
  'current-savings': 10000,
  'yearly-contribution': 500,
  'expected-return': 5,
  duration: 5,
};

function Form({ calculateHandler }) {
  const [userInput, setUserInput] = useState(initalState);

  const changeHandler = (name, value) => {
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    calculateHandler(userInput);
  };

  const resetHandler = (e) => {
    setUserInput(initalState);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler} onReset={resetHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            onChange={(e) => {
              changeHandler('current-savings', e.target.value);
            }}
            value={userInput['current-savings']}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            onChange={(e) => {
              changeHandler('yearly-contribution', e.target.value);
            }}
            value={userInput['yearly-contribution']}
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
              changeHandler('expected-return', e.target.value);
            }}
            value={userInput['expected-return']}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            onChange={(e) => {
              changeHandler('duration', e.target.value);
            }}
            value={userInput.duration}
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
