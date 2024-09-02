import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { formatDistanceToNow } from "date-fns";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { formatDistance, ptBR } from "date-fns/locale/pt-BR";

import styles from "./Index.module.css";

function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <main className={styles.historyContainer}>
      <h1>Meu histórico</h1>

      <div className={styles.historyList}>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <span
                        className={`${styles.status} ${styles.statusColorGreen}`}
                      >
                        Concluído
                      </span>
                    )}

                    {cycle.interruptedDate && (
                      <span
                        className={`${styles.status} ${styles.statusColorRed}`}
                      >
                        Interrompido
                      </span>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <span
                        className={`${styles.status} ${styles.statusColorYellow}`}
                      >
                        Em andamento
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default History;
