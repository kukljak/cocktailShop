import React, {useEffect, useState} from "react";
import { useLocation } from "react-router";

const useFetchMovies = (url) => {

    const [fetchResult, setFetchResult] = useState();
    const location = useLocation();
    
    async function fetchMovies(link) {
        try {
            const res = await fetch(link);
            if (res.ok) {
                const data = await res.json();
                setFetchResult(data);
            } else {
                console.log(`Problem is with ${res.status}`);
                throw new Error(`Problem with ${res.status}`);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMovies(url);
    },[location.pathname]);

    return (fetchResult);
    
}

export default useFetchMovies;
