import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

const navbarList = [
    {
        to: "/",
        label: "Home",
        icon: "fa-solid fa-house",
    },
    {
        to: "/profile",
        label: "Profile",
        icon: "fa-solid fa-user",
    },
    {
        to: "/modal-demo",
        label: "Modal Demo",
        icon: "fa-solid fa-circle-info",
    },
    {
        to: "/scroll-demo",
        label: "Scroll Demo",
        icon: "fa-solid fa-scroll",
    },
    {
        to: "/performance-demo",
        label: "PerformanceDemo",
        icon: "fa-solid fa-calculator",
    },
];

function Navigation() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                {navbarList &&
                    navbarList.map((nav) => (
                        <li key={nav.label} className={styles.navbarItem}>
                            <NavLink
                                to={nav.to}
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                <i
                                    className={`${nav.icon} ${styles.navIcon}`}
                                ></i>

                                <span>{nav.label}</span>
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </nav>
    );
}
export default Navigation;
