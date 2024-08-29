import styles from "./Index.module.css";

function History() {
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
            <tr>
              <td>Tarefa</td>
              <td>28 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <span className={`${styles.status} ${styles.statusColorGreen}`}>
                  Concluído
                </span>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>28 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <span className={`${styles.status} ${styles.statusColorGreen}`}>
                  Concluído
                </span>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>28 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <span
                  className={`${styles.status} ${styles.statusColorYellow}`}
                >
                  Concluído
                </span>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>28 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <span className={`${styles.status} ${styles.statusColorGreen}`}>
                  Concluído
                </span>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>28 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <span className={`${styles.status} ${styles.statusColorGreen}`}>
                  Concluído
                </span>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>28 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <span className={`${styles.status} ${styles.statusColorRed}`}>
                  Concluído
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default History;
