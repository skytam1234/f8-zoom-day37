import { useEffect, useState } from "react";

const DataFetcher = ({ url, children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((res) => setData(res))
                .catch((res) => setError(res.message || "An error occurred"))
                .finally(() => {
                    setLoading(false);
                });
        }, 3000);
    }, []);
    return <>{children({ data, loading, error })}</>;
};
export default DataFetcher;
