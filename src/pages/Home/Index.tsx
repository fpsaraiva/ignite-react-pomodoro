import { createContext, useEffect, useState } from "react";

import { HandPalm, Play } from "phosphor-react";

import styles from "./Index.module.css";
import NewCycleForm from "./components/NewCycleForm";
import Countdown from "./components/Countdown";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  // function handleCreateNewCycle(data: NewCycleFormData) {
  //   const id = String(new Date().getTime());

  //   const newCycle: Cycle = {
  //     id,
  //     task: data.task,
  //     minutesAmount: data.minutesAmount,
  //     startDate: new Date(),
  //   };

  //   setCycles((state) => [...state, newCycle]);
  //   setActiveCycleId(id);

  //   reset();
  // }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  //const task = watch("task");
  //const isSubmitDisable = !task;

  return (
    <main className={styles.homeContainer}>
      <form /*onSubmit={handleSubmit(handleCreateNewCycle)}*/>
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          {/* <NewCycleForm /> */}
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <button
            type="button"
            className={`${styles.buttonContainer} ${styles.stopButtonContainer}`}
            onClick={handleInterruptCycle}
          >
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button
            className={`${styles.buttonContainer} ${styles.startButtonContainer}`}
            /*disabled={isSubmitDisable}*/
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
