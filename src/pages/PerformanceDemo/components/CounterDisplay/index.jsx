import { memo } from "react";
import styles from "./CounterDisplay.module.scss";

const CounterDisplay = memo(({ counter }) => {
    return (
        <div className={styles.preview}>
            <h2
                className={styles.previewNumber}
                style={{
                    color: counter > 0 ? "green" : counter < 0 ? "red" : "gray",
                }}
            >
                {counter}
            </h2>
        </div>
    );
});
CounterDisplay.displayName = "CounterDisplay";
export default CounterDisplay;
