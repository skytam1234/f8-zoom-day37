import { useEffect, useRef, useState } from "react";
import CustomInput from "../../components/CustomInput";
import styles from "./FocusDemo.module.scss";

function FocusDemo() {
    const [values, setValues] = useState("");
    const [values2, setValues2] = useState("");

    const refs = useRef();
    const refs2 = useRef();
    const counter = useRef(0);
    const handleValueChange = (e) => {
        setValues(e.target.value);
    };
    const handleValueChange2 = (e) => {
        setValues2(e.target.value);
    };
    useEffect(() => {
        counter.current++;
    }, [values, values2]);
    return (
        <>
            <div className={styles["input-item"]}>
                <CustomInput
                    ref={refs}
                    value={values}
                    onChange={handleValueChange}
                    placeholder={"Cha truyền vào con..."}
                />
                <button
                    className={styles.button}
                    onClick={() => {
                        refs.current.focus();
                    }}
                >
                    Focus Input 1
                </button>
                <button
                    className={styles.button}
                    onClick={() => {
                        const data = refs.current.getValue();
                        console.log(data);
                    }}
                >
                    Console.log("gọi hàm getValue")
                </button>
                <button
                    className={styles.button}
                    onClick={() => {
                        setValues("");
                    }}
                >
                    Clear 1
                </button>
            </div>
            <div className={styles["input-item"]}>
                <CustomInput
                    ref={refs2}
                    value={values2}
                    onChange={handleValueChange2}
                    placeholder={"Cha truyền vào con..."}
                />
                <button
                    className={styles.button}
                    onClick={() => {
                        refs2.current.focus();
                    }}
                >
                    Focus Input 2
                </button>
                <button
                    className={styles.button}
                    onClick={() => {
                        const data = refs2.current.getValue();
                        console.log(data);
                    }}
                >
                    Console.log("gọi hàm getValue")
                </button>
                <button
                    className={styles.button}
                    onClick={() => {
                        setValues2("");
                    }}
                >
                    Clear 2
                </button>
            </div>
            <div className={styles["input-item"]}>
                <div>
                    Số lần re-render : <span>{counter.current}</span>
                </div>
            </div>
        </>
    );
}
export default FocusDemo;
