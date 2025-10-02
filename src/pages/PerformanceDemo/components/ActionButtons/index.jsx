import { memo } from "react";
import styles from "./ActionButtons.module.scss";

const ActionButtons = memo(({ onIncrement, onReset, onDecrease }) => {
    return (
        <div className={styles.control}>
            <div className={styles.controlContent}>
                <div className={styles.increaseBtn} onClick={onIncrement}>
                    Tăng
                </div>
                <div className={styles.resetBtn} onClick={onReset}>
                    Bắt đầu
                </div>
                <div className={styles.decreaseBtn} onClick={onDecrease}>
                    Giảm
                </div>
            </div>
        </div>
    );
});
ActionButtons.displayName = "ActionButtons";
export default ActionButtons;
