import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => {
            if (!response.ok) {
                throw Error('Could not fetch the data for that resource');
            }
            return response.json();
        })
        .then(data => {
            setdata(data);
            setPending(false);
            setError(null);
        }).catch(e => {
            console.log(e);
            setError(e.message);
            setPending(false);
        })
        }, 1000);
    }, [url]);

    return [data, isPending, error];
}

export default useFetch;