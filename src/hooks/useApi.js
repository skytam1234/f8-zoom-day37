import { useEffect, useState } from "react";

function useApi(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((res) => setData(res))
                .catch((res) => setErr(res.message || "An error occurred"))
                .finally(() => {
                    setLoading(false);
                });
        }, 3000);
    }, [data, loading, err, url]);
    const refetch = () => {
        setErr("");
        setLoading(true);
        setData([]);
    };
    return { data, loading, err, refetch };
}
export default useApi;
