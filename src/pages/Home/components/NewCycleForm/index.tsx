import styles from "./index.module.css";

function NewCycleForm() {
  return (
    <div className={styles.formContainer}>
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        className={`${styles.baseInput} ${styles.taskInput}`}
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
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
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </div>
  );
}

export default NewCycleForm;
