import styles from "./PerformanceDemo.module.scss";
import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";
import { useCallback, useEffect, useState } from "react";

function PerformanceDemo() {
    const [counter, setCounter] = useState(0);
    const [items, setItems] = useState(null);

    const onIncrement = useCallback(() => {
        setCounter((pre) => pre + 1);
    }, []);
    const onDecrease = useCallback(() => {
        setCounter((pre) => pre - 1);
    }, []);

    const onReset = useCallback(() => {
        setCounter(0);
    }, []);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${counter}`)
            .then((res) => res.json())
            .then((res) => {
                if (counter === 0) {
                    setItems(null);
                } else {
                    setItems(res.products);
                }
            });
    }, [counter]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Counter App</h1>
                    <CounterDisplay counter={counter} />
                    <ActionButtons
                        onIncrement={onIncrement}
                        onReset={onReset}
                        onDecrease={onDecrease}
                    />
                    <div className={styles.list}>
                        <ExpensiveChild items={items} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default PerformanceDemo;
