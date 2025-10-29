import { forwardRef, useEffect, useRef } from "react";
import useApi from "../../hooks/useApi";
import useToggle from "../../hooks/useToggle";
import styles from "./CustomHooksDemo.module.scss";

function RefetchPosts() {
    const { data, loading, error, refetch } = useApi(
        "https://jsonplaceholder.typicode.com/posts"
    );
    if (loading) return <div className={styles.spinner}></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <button onClick={refetch}>Refetch Posts</button>

            {data?.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
}
function RefetchUsers() {
    const { data, loading, error, refetch } = useApi(
        "https://jsonplaceholder.typicode.com/users"
    );
    if (loading) return <div className={styles.spinner}></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <button onClick={refetch}>Refetch Users</button>

            {data?.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}
function ToggleUsers() {
    const { isVisible, toggleVisible, setVisible } = useToggle();
    const { data, loading, error } = useApi(
        "https://jsonplaceholder.typicode.com/users"
    );
    if (loading) return <div className={styles.spinner}></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <button onClick={toggleVisible}>
                {isVisible ? "Hide" : "Show"} User
            </button>
            <button onClick={() => setVisible(true)}>Force Show</button>

            {isVisible &&
                data?.map((item) => <div key={item.id}>{item.name}</div>)}
        </div>
    );
}
function TogglePosts() {
    const { isVisible, toggleVisible, setVisible } = useToggle();
    const { data, loading, error } = useApi(
        "https://jsonplaceholder.typicode.com/posts"
    );
    if (loading) return <div className={styles.spinner}></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <button onClick={toggleVisible}>
                {isVisible ? "Hide" : "Show"} Posts
            </button>
            <button onClick={() => setVisible(true)}>Force Show</button>

            {isVisible &&
                data?.map((item) => <div key={item.id}>{item.title}</div>)}
        </div>
    );
}

function ToggleTheme() {
    const { isVisible, toggleVisible } = useToggle();
    useEffect(() => {
        if (!isVisible) {
            document.documentElement.style.setProperty("color", "#fff");
            document.documentElement.style.setProperty("background", "#333");
        } else {
            document.documentElement.style.setProperty("color", "#292929");
            document.documentElement.style.setProperty("background", "#fff");
        }
    }, [isVisible]);

    return (
        <button
            onClick={() => {
                toggleVisible();
            }}
        >
            Change Theme
        </button>
    );
}

function CustomHooksDemo() {
    return (
        <div>
            <RefetchUsers />
            <br></br>
            <RefetchPosts />
            <br></br>
            <ToggleUsers />
            <br></br>
            <TogglePosts />
            <br></br>
            <ToggleTheme />
        </div>
    );
}
export default CustomHooksDemo;
