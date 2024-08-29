import { useState } from "react";

import { Play } from "phosphor-react";

import styles from "./Index.module.css";

function Home() {
  const [task, setTask] = useState("");

  function handleSubmit(event) {}

  return (
    <main className={styles.homeContainer}>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            className={`${styles.baseInput} ${styles.taskInput}`}
            id="task"
            name="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            onChange={(e) => setTask(e.target.value)}
            value={task}
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

        <button
          type="button"
          className={styles.buttonContainer}
          disabled={!task}
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  );
}

export default Home;
