import PropTypes from "prop-types";
import { memo, useMemo } from "react";

const ExpensiveChild = memo(({ items }) => {
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating longest name...");
        let length = 0;
        if (items === null || items.length === 0) {
            return length;
        }
        let longest = "";
        for (let i = 0; i < 100000; i++) {
            console.log("i=:", i);
        }
        items.forEach((item) => {
            if (item.title.length > longest.length) {
                longest = item.title;
            }
        });

        return longest;
    }, [items]);

    if (items === null || items.length === 0) {
        return <div>Chưa có danh sách nào</div>;
    }
    return (
        <div>
            <div>
                <span>Tiêu đề dài nhất </span>:
                <span>{expensiveCalculation}</span>
            </div>
            <br />
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
});
ExpensiveChild.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            title: PropTypes.string.isRequired,
        })
    ),
};
ExpensiveChild.displayName = "ExpensiveChild";
export default ExpensiveChild;
