import styles from "./RenderPropsDemo.module.scss";
import DataFetcher from "../../components/DataFetcher";

function RenderPropsDemo() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>RenderProps</h1>

            <div className={styles.section}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading)
                            return <div className={styles.spinner}></div>;
                        if (error)
                            return (
                                <div className={styles.error}>
                                    Error: {error}
                                </div>
                            );
                        return (
                            <>
                                <h3>Posts</h3>
                                {data?.map((post) => (
                                    <div key={post.id} className={styles.item}>
                                        {post.title}
                                    </div>
                                ))}
                            </>
                        );
                    }}
                </DataFetcher>
            </div>

            <div className={styles.section}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading)
                            return <div className={styles.spinner}></div>;
                        if (error)
                            return (
                                <div className={styles.error}>
                                    Error: {error}
                                </div>
                            );
                        return (
                            <>
                                <h3>Users</h3>
                                {data?.map((user) => (
                                    <div key={user.id} className={styles.item}>
                                        {user.name} - {user.email}
                                    </div>
                                ))}
                            </>
                        );
                    }}
                </DataFetcher>
            </div>
        </div>
    );
}

export default RenderPropsDemo;
