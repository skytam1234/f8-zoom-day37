import { memo, useEffect } from "react";
import styles from "./CounterDisplay.module.scss";

const CounterDisplay = memo(({ count, name }) => {
    useEffect(() => {
        console.log("CounterDisplay re-rendered");
    });

    return (
        <div className={styles.preview}>
            <h2
                className={styles.previewNumber}
                style={{
                    color: count > 0 ? "green" : count < 0 ? "red" : "gray",
                }}
            >
                Count: {count}
            </h2>
            <p className={styles.name}>Name: {name}</p>
        </div>
    );
});

CounterDisplay.displayName = "CounterDisplay";
export default CounterDisplay;
