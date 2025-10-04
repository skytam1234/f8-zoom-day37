import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./CustomInput.module.scss";
const CustomInput = forwardRef(
    ({ label, placeholder, value, onChange }, ref) => {
        const inputRef = useRef();
        useImperativeHandle(
            ref,
            () => {
                return {
                    focus() {
                        inputRef.current.focus();
                    },
                    blur() {
                        inputRef.current.blur();
                    },
                    getValue() {
                        return inputRef.current.value;
                    },
                };
            },
            []
        );
        return (
            <input
                className={styles.wrapper}
                label={label}
                value={value}
                onChange={onChange}
                ref={inputRef}
                placeholder={placeholder}
            />
        );
    }
);

export default CustomInput;
