import PropTypes from "prop-types";
import { memo, useMemo, useEffect } from "react";
import styles from "./ExpensiveChild.module.scss";

const ExpensiveChild = memo(({ items }) => {
    useEffect(() => {
        console.log("ExpensiveChild re-rendered");
    });

    const expensiveCalculation = useMemo(() => {
        console.log("Calculating longest name (expensive)...");
        if (!items || items.length === 0) {
            return null;
        }

        let longest = { id: null, title: "" };
        for (let i = 0; i < 100000; i++) {
            // Simulating heavy computation
        }
        items.forEach((item) => {
            if (item.title && item.title.length > longest.title.length) {
                longest = { id: item.id, title: item.title };
            }
        });

        return longest;
    }, [items]);

    if (!items || items.length === 0) {
        return (
            <div className={styles.container}>
                <h3>ExpensiveChild</h3>
                <p>Chưa có danh sách nào - click "Thêm Item" để thêm</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h3>ExpensiveChild (với useMemo)</h3>
            {expensiveCalculation && (
                <div className={styles.result}>
                    <strong>Tiêu đề dài nhất:</strong> {expensiveCalculation.title}
                </div>
            )}
            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item.id}>{item.title} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
});

ExpensiveChild.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number,
        })
    ),
};

ExpensiveChild.displayName = "ExpensiveChild";
export default ExpensiveChild;
