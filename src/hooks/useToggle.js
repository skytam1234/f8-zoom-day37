import { useState } from "react";

function useToggle() {
    const [isVisible, setVisible] = useState(false);
    const toggleVisible = () => {
        setVisible((pre) => !pre);
    };
    return { isVisible, toggleVisible, setVisible };
}
export default useToggle;
