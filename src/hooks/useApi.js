import { useEffect, useState } from "react";

function useApi(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const fetchData = () => {
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
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    const refetch = () => {
        fetchData();
    };

    return { data, loading, error, refetch };
}

export default useApi;
