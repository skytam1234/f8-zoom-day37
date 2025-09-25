import { useEffect } from "react";
import styles from "./Modal.module.scss";

function Modal({ isOpen = false, children, onRequestClose }) {
    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === "Escape") {
                onRequestClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeydown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [isOpen, onRequestClose]);
    if (!isOpen) return null;
    return (
        <div className={styles.modal}>
            <div className={styles.body}>
                <div
                    className={styles.closeButton}
                    onClick={() => {
                        onRequestClose();
                    }}
                >
                    <i className="fa-solid fa-x"></i>
                </div>
                {children}
            </div>
            <div className={styles.overlay}></div>
        </div>
    );
}
export default Modal;
