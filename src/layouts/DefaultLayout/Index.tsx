import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";

import styles from './Index.module.css'

function DefaultLayout() {
    return (
        <div className={styles.container}>
            <Header />
            <Outlet />
        </div>
    );
};

export default DefaultLayout
