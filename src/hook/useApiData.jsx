import { useState, useEffect } from "react";
import axios from "axios";

function useApiData(){
    const [co2Data, setCo2Data] = useState([])
    const [methaneData, setMethaneData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get(`https://global-warming.org/api/methane-api`)
                setMethaneData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { methaneData, loading, error}
}

export default useApiData