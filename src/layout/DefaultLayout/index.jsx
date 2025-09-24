import { Outlet } from "react-router";
import Header from "./components/Header";
import Navigation from "../../components/Navigation";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles["main-content"]}>
                <Navigation />
                <div className={styles.content}>{<Outlet />}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
