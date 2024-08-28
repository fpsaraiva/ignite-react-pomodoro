import { Play } from "phosphor-react";

import styles from "./Index.module.css";

function Home() {
  return (
    <main className={styles.homeContainer}>
      <form action="">
        <div className={styles.formContainer}>
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            className={`${styles.baseInput} ${styles.taskInput}`}
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input
            className={`${styles.baseInput} ${styles.minutesAmountInput}`}
            type="number"
            id="minutesAmount"
            min={1}
            max={60}
          />

          <span>minutos.</span>
        </div>

        <div className={styles.countdownContainer}>
          <span>0</span>
          <span>0</span>
          <div>:</div>
          <span>0</span>
          <span>0</span>
        </div>

        <button type="button" className={styles.buttonContainer}>
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  );
}

export default Home;
