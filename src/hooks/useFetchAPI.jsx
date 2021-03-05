import { useState, useEffect } from 'react';

export default function useFetchAPI(url) {
    const [data, setData] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        let isMounted = true;
        //Create async fetch function
        const fetchData = async (url) => {
            setIsProcessing(true);
            try {
                const response = await fetch(url);
                if(response.ok) {
                    const data = await response.json();
                    if(isMounted) {
                        setIsProcessing(false);
                        setData(data);
                    }
                } else {
                    throw Error("Response unsuccessful");
                } 
            } catch(e) {
                setError(e);
                setIsProcessing(false);
            }
        }

        fetchData(url);

        return () => {
            isMounted = false;
        }
    }, [url]);

    return [data, isProcessing, error];
}