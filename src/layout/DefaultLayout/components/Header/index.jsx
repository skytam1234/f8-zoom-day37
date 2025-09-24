import AppLogo from "../AppLogo";
import MyCourses from "../MyCourses";
import SearchForm from "../SearchForm";
import Notification from "../Notification";
import UserMenu from "../UserMenu";
import styles from "./Header.module.scss";
function Header() {
    return (
        <header className={styles.header}>
            <AppLogo />
            <SearchForm />
            <div className={styles.action}>
                <MyCourses />
                <Notification />
                <UserMenu />
            </div>
        </header>
    );
}
export default Header;
