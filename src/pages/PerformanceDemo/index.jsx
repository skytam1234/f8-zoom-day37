import { useCallback, useState, useRef, useEffect } from "react";
import styles from "./PerformanceDemo.module.scss";
import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";

function PerformanceDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("User");
    const [items, setItems] = useState([]);
    const renderCountRef = useRef(0);

    useEffect(() => {
        renderCountRef.current++;
    });

    const names = ["User", "John", "Alice", "Bob", "Charlie", "Diana"];

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    const handleChangeName = useCallback(() => {
        setName((prevName) => {
            const currentIndex = names.indexOf(prevName);
            const nextIndex = (currentIndex + 1) % names.length;
            return names[nextIndex];
        });
    }, []);

    const handleAddItem = useCallback(() => {
        setItems((prevItems) => [
            ...prevItems,
            {
                id: Date.now(),
                title: `Sản phẩm ${prevItems.length + 1}`,
                price: Math.floor(Math.random() * 100) + 10,
            },
        ]);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Performance Demo - React.memo & useCallback
                </h1>
                <p className={styles.subtitle}>
                    Thay đổi state và quan sát child components re-render
                </p>

                <div className={styles.info}>
                    <span>Số lần render của Parent: {renderCountRef.current}</span>
                </div>

                <div className={styles.actions}>
                    <button onClick={handleIncrement} className={styles.btn}>
                        Tăng Count
                    </button>
                    <button onClick={handleChangeName} className={styles.btn}>
                        Đổi Name
                    </button>
                    <button onClick={handleAddItem} className={styles.btn}>
                        Thêm Item
                    </button>
                </div>

                <div className={styles.stateDisplay}>
                    <div>
                        <strong>Count:</strong> {count}
                    </div>
                    <div>
                        <strong>Name:</strong> {name}
                    </div>
                    <div>
                        <strong>Items:</strong> {items.length} items
                    </div>
                </div>

                <div className={styles.components}>
                    <CounterDisplay count={count} name={name} />
                    <ActionButtons
                        onIncrement={handleIncrement}
                        onReset={handleReset}
                    />
                    <ExpensiveChild items={items} />
                </div>

                <div className={styles.explanation}>
                    <h3>Hướng dẫn:</h3>
                    <ul>
                        <li>
                            Click "Tăng Count" - Chỉ CounterDisplay re-render
                        </li>
                        <li>
                            Click "Đổi Name" - Chỉ CounterDisplay re-render
                        </li>
                        <li>
                            Click "Thêm Item" - Chỉ ExpensiveChild re-render
                        </li>
                        <li>
                            Kiểm tra console để xem log re-render
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PerformanceDemo;
