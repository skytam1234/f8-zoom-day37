import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import clsx from "clsx";

function Modal({
    isOpen = false,
    children,
    onRequestClose,
    closeTimeoutMS = 0,
    onAfterOpen,
    onAfterClose,
    overlayClassName,
    className,
    bodyOpenClassName,
    htmlOpenClassName,
    shouldCloseOnOverlayClick = false,
    shouldCloseOnEsc = false,
    ...passProps
}) {
    const [isVisible, setIsVisible] = useState(false);

    const handle = () => {
        if (isOpen) {
            setIsVisible(true);
            setTimeout(() => {
                if (typeof onAfterOpen === "function") {
                    onAfterOpen();
                }
            }, closeTimeoutMS);
        } else {
            setIsVisible(false);
            if (typeof onAfterOpen === "function") {
                onAfterClose();
            }
        }
    };
    //xử lý animation
    useEffect(() => {
        if (isOpen) {
            handle();
        } else if (isVisible) {
            setTimeout(() => {
                handle();
            }, closeTimeoutMS);
        }
    }, [isOpen, closeTimeoutMS]);
    // xử lý Escape
    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === "Escape") {
                onRequestClose();
            }
        };
        if (isOpen && shouldCloseOnEsc) {
            window.addEventListener("keydown", handleKeydown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [isOpen]);
    //Xử lý add class vào body
    useEffect(() => {
        if (isOpen && bodyOpenClassName != "" && bodyOpenClassName) {
            document.body.classList.add(bodyOpenClassName);
        }

        return () => {
            if (isOpen && bodyOpenClassName != "" && bodyOpenClassName) {
                document.body.classList.remove(bodyOpenClassName);
            }
        };
    }, [isOpen]);
    //Xử lý add class vào html
    useEffect(() => {
        if (isOpen && htmlOpenClassName != "" && htmlOpenClassName) {
            document.documentElement.classList.add(htmlOpenClassName);
        }

        return () => {
            if (isOpen && htmlOpenClassName != "" && htmlOpenClassName) {
                document.documentElement.classList.remove(htmlOpenClassName);
            }
        };
    }, [isOpen]);
    if (!isVisible) return null;

    return (
        <div
            {...passProps}
            className={clsx(styles.modal, className, {
                [styles.isOpen]: isOpen && closeTimeoutMS,
                [styles.isClose]: !isOpen,
                [styles.isBasic]: isOpen,
            })}
        >
            <div className={styles.body}>
                <div className={styles.closeButton} onClick={onRequestClose}>
                    <i className="fa-solid fa-x"></i>
                </div>
                {children}
            </div>
            <div
                className={clsx(styles.overlay, overlayClassName)}
                onClick={shouldCloseOnOverlayClick ? onRequestClose : () => {}}
            ></div>
        </div>
    );
}
export default Modal;
