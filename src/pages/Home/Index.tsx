import { Play } from 'phosphor-react'

import styles from './Index.module.css'

function Home() {
    return (
        <main className={styles.homeContainer}>
            <form action="">
                <div className={styles.formContainer}>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="task" />

                    <label htmlFor="minutesAmount">durante</label>
                    <input type="number" id="minutesAmount"/>

                    <span>minutos.</span>
                </div>

                <div className={styles.countdownContainer}>
                    <span>0</span>
                    <span>0</span>
                    <div>:</div>
                    <span>0</span>
                    <span>0</span>
                </div>

                <button type="button">
                    <Play size={24} />
                    Começar
                </button>
            </form>
        </main>
    );
};

export default Home;
