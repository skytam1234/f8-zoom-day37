import styles from "./GoToTop.module.scss";
import clsx from "clsx";
function GotoTop({ isAdd, className, ...passProps }) {
    const handle = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    if (!isAdd) return null;
    return (
        <div
            {...passProps}
            className={clsx(styles.wrapper, className)}
            onClick={handle}
        >
            ⬆️
        </div>
    );
}
export default GotoTop;
