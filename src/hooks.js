import * as React from "react";

export const useFetch = (url, options, deps = []) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            setResponse(null);
            setLoading(true);
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, deps);

    return { response, error, loading };
};
