import { memo, useEffect } from "react";
import styles from "./ActionButtons.module.scss";

const ActionButtons = memo(({ onIncrement, onReset }) => {
    useEffect(() => {
        console.log("ActionButtons re-rendered");
    });

    return (
        <div className={styles.control}>
            <div className={styles.controlContent}>
                <div className={styles.increaseBtn} onClick={onIncrement}>
                    Tăng
                </div>
                <div className={styles.resetBtn} onClick={onReset}>
                    Reset
                </div>
            </div>
        </div>
    );
});

ActionButtons.displayName = "ActionButtons";
export default ActionButtons;
