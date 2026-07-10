import { useEffect, useRef, useState } from "react";
import CustomInput from "../../components/CustomInput";
import styles from "./FocusDemo.module.scss";

function FocusDemo() {
    const [values, setValues] = useState("");
    const [values2, setValues2] = useState("");

    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const renderCounter = useRef(0);

    useEffect(() => {
        renderCounter.current++;
        console.log("FocusDemo re-rendered, count:", renderCounter.current);
    });

    const handleValueChange = (e) => {
        setValues(e.target.value);
    };

    const handleValueChange2 = (e) => {
        setValues2(e.target.value);
    };

    const handleFocus1 = () => {
        inputRef1.current?.focus();
    };

    const handleFocus2 = () => {
        inputRef2.current?.focus();
    };

    const handleClearBoth = () => {
        setValues("");
        setValues2("");
    };

    const handleGetValues = () => {
        const val1 = inputRef1.current?.getValue();
        const val2 = inputRef2.current?.getValue();
        console.log("Input 1 value:", val1);
        console.log("Input 2 value:", val2);
        alert(`Input 1: ${val1}\nInput 2: ${val2}`);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Focus Demo - forwardRef & useImperativeHandle</h1>
            <p className={styles.subtitle}>
                Sử dụng useRef để truy cập DOM và gọi các phương thức từ bên ngoài
            </p>

            <div className={styles.info}>
                <span>Số lần re-render: {renderCounter.current}</span>
            </div>

            <div className={styles.inputGroup}>
                <h3>Input 1</h3>
                <CustomInput
                    ref={inputRef1}
                    value={values}
                    onChange={handleValueChange}
                    placeholder="Nhập giá trị 1..."
                />
                <div className={styles.buttons}>
                    <button onClick={handleFocus1} className={styles.btn}>
                        Focus Input 1
                    </button>
                    <button
                        onClick={() => inputRef1.current?.blur()}
                        className={styles.btn}
                    >
                        Blur Input 1
                    </button>
                    <button
                        onClick={() => setValues("")}
                        className={styles.btn}
                    >
                        Clear 1
                    </button>
                </div>
            </div>

            <div className={styles.inputGroup}>
                <h3>Input 2</h3>
                <CustomInput
                    ref={inputRef2}
                    value={values2}
                    onChange={handleValueChange2}
                    placeholder="Nhập giá trị 2..."
                />
                <div className={styles.buttons}>
                    <button onClick={handleFocus2} className={styles.btn}>
                        Focus Input 2
                    </button>
                    <button
                        onClick={() => inputRef2.current?.blur()}
                        className={styles.btn}
                    >
                        Blur Input 2
                    </button>
                    <button
                        onClick={() => setValues2("")}
                        className={styles.btn}
                    >
                        Clear 2
                    </button>
                </div>
            </div>

            <div className={styles.actions}>
                <button onClick={handleClearBoth} className={styles.actionBtn}>
                    Clear Both
                </button>
                <button onClick={handleGetValues} className={styles.actionBtn}>
                    Get Values
                </button>
            </div>

            <div className={styles.explanation}>
                <h3>Hướng dẫn:</h3>
                <ul>
                    <li>
                        <strong>useRef cho counter:</strong> Tăng giá trị khi re-render
                        nhưng không trigger re-render
                    </li>
                    <li>
                        <strong>useRef cho DOM:</strong> Truy cập input elements qua
                        ref
                    </li>
                    <li>
                        <strong>forwardRef:</strong> Cho phép truyền ref từ parent
                        xuống child
                    </li>
                    <li>
                        <strong>useImperativeHandle:</strong> Tạo các phương thức
                        custom (focus, blur, getValue)
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FocusDemo;
