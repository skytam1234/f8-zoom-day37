import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./CustomInput.module.scss";

const CustomInput = forwardRef(({ label, placeholder, value, onChange }, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus();
        },
        blur: () => {
            inputRef.current?.blur();
        },
        getValue: () => {
            return inputRef.current?.value || "";
        },
    }), []);

    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                ref={inputRef}
                className={styles.input}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
});

CustomInput.displayName = "CustomInput";
export default CustomInput;
