import styles from "./index.module.css";

function Countdown() {
  return (
    <div className={styles.countdownContainer}>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <div>:</div>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </div>
  );
}

export default Countdown;
