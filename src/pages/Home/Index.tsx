import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useState } from "react";

import { Play } from "phosphor-react";

import styles from "./Index.module.css";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(1, "O ciclo precisa ser de no mínimo 1 minuto.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);

    reset();
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  console.log(activeCycle);

  const task = watch("task");
  const isSubmitDisable = !task;

  return (
    <main className={styles.homeContainer}>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <div className={styles.formContainer}>
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            className={`${styles.baseInput} ${styles.taskInput}`}
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
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
            {...register("minutesAmount", { valueAsNumber: true })}
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
          type="submit"
          className={styles.buttonContainer}
          disabled={isSubmitDisable}
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  );
}

export default Home;
