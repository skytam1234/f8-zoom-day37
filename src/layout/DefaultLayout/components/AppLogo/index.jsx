import { Link } from "react-router";
import Logo from "../../../../../public/image/f8-icon.png";
import styles from "./AppLogo.module.scss";

function AppLogo() {
    return (
        <Link to="/" className={styles.logo}>
            <img src={Logo} alt="F8 Logo" className={styles.logoImage} />
            <span className={styles.logoText}>Học Lập Trình Để Đi Làm</span>
        </Link>
    );
}

export default AppLogo;
