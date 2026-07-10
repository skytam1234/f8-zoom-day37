import styles from "./RenderPropsDemo.module.scss";
import DataFetcher from "../../components/DataFetcher";

function RenderPropsDemo() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>RenderProps Pattern - DataFetcher</h1>
            <p className={styles.subtitle}>
                DataFetcher là component nhận children là một function (render prop)
            </p>

            <div className={styles.section}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading)
                            return <div className={styles.spinner}></div>;
                        if (error)
                            return (
                                <div className={styles.error}>
                                    Lỗi: {error}
                                </div>
                            );
                        return (
                            <>
                                <h3>Bài viết (Posts)</h3>
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
                                    Lỗi: {error}
                                </div>
                            );
                        return (
                            <>
                                <h3>Người dùng (Users)</h3>
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

            <div className={styles.explanation}>
                <h3>Cách hoạt động:</h3>
                <ul>
                    <li>
                        <code>DataFetcher</code> fetch data và trả về cho render prop
                    </li>
                    <li>
                        Render prop là function: <code>{`({ data, loading, error }) => JSX`}</code>
                    </li>
                    <li>
                        Mỗi lần dùng có thể render UI khác nhau
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RenderPropsDemo;
