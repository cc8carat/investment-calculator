import styles from './Button.module.css';

function Button({ label, type, color }) {
  return (
    <button type={type} className={styles[color]}>
      {label}
    </button>
  );
}

export default Button;
