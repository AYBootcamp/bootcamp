import { useState, useEffect } from "react"

const useReFetch = (setTimer) => {
    const [loading, setLoading] = useState(true)
    const shouldReFetch = () => {
        setLoading(true)
    }
    setTimer *= 1000;
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, setTimer)
    })

    return [loading, shouldReFetch]
}
export default useReFetch