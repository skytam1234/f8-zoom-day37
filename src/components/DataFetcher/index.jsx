import { useEffect, useState } from "react";

const DataFetcher = ({ url, children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        setError("");
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((res) => setData(res))
            .catch((err) => setError(err.message || "An error occurred"))
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return <>{children({ data, loading, error })}</>;
};

export default DataFetcher;
