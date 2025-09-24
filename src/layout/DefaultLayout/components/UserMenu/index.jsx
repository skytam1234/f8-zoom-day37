import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import styles from "./UserMenu.module.scss";
function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [res, setRes] = useState([]);
    const [user, setUser] = useState([]);
    const dropdown = useRef();
    useEffect(() => {
        const responds = [
            { id: "header", type: "header" },
            { id: 1, label: "Trang cá nhân", to: "/profile", icon: "👤" },
            { id: 2, label: "Cài đặt", to: "/settings", icon: "⚙️" },
            { id: "divider", type: "divider" },
            { id: 3, label: "Đăng xuất", to: "/logout", icon: "🚪" },
        ];
        setRes(responds);
        const user = {
            name: "Dương Đức Tâm",
            avatar: "https://i.pravatar.cc/29",
            email: "skytam1234@gmail.com",
        };
        setUser(user);

        const handle = (e) => {
            if (dropdown.current && !dropdown.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handle);
        return () => {
            document.removeEventListener("click", handle);
        };
    }, [isOpen]);
    return (
        <div className={styles.userMenu} ref={dropdown}>
            <button
                className={styles.userButton}
                onClick={() => setIsOpen(!isOpen)}
            >
                <img
                    src={user.avatar}
                    alt={user.name}
                    className={styles.avatar}
                />
                <span className={styles.userName}>{user.name}</span>
            </button>
            {isOpen && (
                <ul className={styles.dropdown}>
                    {res.map((item) => {
                        if (item.type === "divider") {
                            return (
                                <li
                                    key={item.id}
                                    className={styles.divider}
                                ></li>
                            );
                        }
                        if (item.type === "header") {
                            return (
                                <li
                                    key={item.id}
                                    className={styles.dropdownHeader}
                                >
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className={styles.avatar}
                                    />
                                    <div className={styles.userInfo}>
                                        <span className={styles.userName}>
                                            {user.name}
                                        </span>
                                        <span className={styles.userEmail}>
                                            {user.email}
                                        </span>
                                    </div>
                                </li>
                            );
                        }
                        return (
                            <li key={item.id}>
                                <Link
                                    to={item.to}
                                    className={styles.menuItem}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className={styles.icon}>
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
export default UserMenu;
