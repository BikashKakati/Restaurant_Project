import { useEffect, useState } from "react";
import { fetchApiData } from "../services/Api";

export function useFetch(endPoint) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let subscribe = true;
        setLoading(true);

        fetchApiData(endPoint)
            .then((res) => {
                if (subscribe) {
                    setData(res);
                    setLoading(false);
                }
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            })
        return () => {
            subscribe = false;
        }
    }, [endPoint])

    return {data, loading};
}