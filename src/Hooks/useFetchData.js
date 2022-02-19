import axios from "axios";
import { useEffect, useState } from "react";


export default function useFetchData(URL) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        try {
            async function fetchData() {
                const response = await axios.get(URL);
                setData(response.data)
                setLoading(false)
            }
            fetchData()
        } catch (e) {
            setError(e)
        }
    }, [URL])
    
    return { 
        data,
        setData,
        loading,
        error
    }
}