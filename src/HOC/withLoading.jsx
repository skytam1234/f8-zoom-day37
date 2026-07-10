import styles from "./withLoading.module.scss";

function withLoading(Component) {
    return function WrappedComponent({ isLoading, ...props }) {
        if (isLoading) {
            return (
                <div className={styles.loadingContainer}>
                    <div className={styles.spinner}></div>
                    <p>Đang tải...</p>
                </div>
            );
        }
        return <Component {...props} />;
    };
}

export default withLoading;
