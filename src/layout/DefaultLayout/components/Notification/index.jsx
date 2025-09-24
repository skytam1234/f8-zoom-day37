import styles from "./Notification.module.scss";
import { useState, useEffect, useRef } from "react";
function Notification() {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const notifCp = useRef();

    useEffect(() => {
        const notifications = [
            {
                id: 1,
                title: "Khóa học mới!",
                description: "Khóa JavaScript nâng cao đã ra mắt.",
            },
            {
                id: 2,
                title: "Cập nhật bài viết",
                description: "Bài viết về React được cập nhật.",
            },
            {
                id: 3,
                title: "Nhắc nhở",
                description: "Hoàn thành bài tập trước 23:59.",
            },
        ];
        setNotifications(notifications);
        const hangdleOver = (e) => {
            if (notifCp.current && !notifCp.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", hangdleOver);
        return () => {
            document.removeEventListener("click", hangdleOver);
        };
    }, [isOpen]);

    return (
        <div className={styles.notification} ref={notifCp}>
            <button
                className={styles.bellButton}
                onClick={() => setIsOpen(!isOpen)}
            >
                🔔
                {notifications.length > 0 && (
                    <span className={styles.badge}>{notifications.length}</span>
                )}
            </button>
            {isOpen && (
                <div className={styles.dropdown}>
                    {notifications.map((notif) => (
                        <div key={notif.id} className={styles.notificationItem}>
                            <p className={styles.title}>{notif.title}</p>
                            <p className={styles.description}>
                                {notif.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Notification;
