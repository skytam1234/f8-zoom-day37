import { memo } from "react";

const ExpensiveChild = memo(({ items }) => {
    if (items) {
        let length = 0;
        items.forEach((item) => {
            length += item.title.length;
        });

        return (
            <div>
                <div>
                    <span>Tổng độ dài</span>:<span>{length}</span>
                </div>
                <br />
                <ul>
                    {items.map((item, index) => {
                        return <li key={index}>{item.title}</li>;
                    })}
                </ul>
            </div>
        );
    }
    return <div>Chưa có danh sách nào</div>;
});
ExpensiveChild.displayName = "ExpensiveChild";
export default ExpensiveChild;
