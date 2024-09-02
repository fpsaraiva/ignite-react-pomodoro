import { useContext } from "react";
import NewCycleForm from "./components/NewCycleForm";
import Countdown from "./components/Countdown";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { HandPalm, Play } from "phosphor-react";

import styles from "./Index.module.css";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch } = newCycleForm;

  const task = watch("task");
  const isSubmitDisable = !task;

  return (
    <main className={styles.homeContainer}>
      <form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <button
            type="button"
            className={`${styles.buttonContainer} ${styles.stopButtonContainer}`}
            onClick={interruptCurrentCycle}
          >
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button
            className={`${styles.buttonContainer} ${styles.startButtonContainer}`}
            disabled={isSubmitDisable}
            type="submit"
          >
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </main>
  );
}

export default Home;
