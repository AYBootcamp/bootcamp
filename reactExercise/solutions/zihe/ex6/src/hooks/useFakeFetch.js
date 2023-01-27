import { useState, useEffect } from "react"

const useFakeFetch = (setTimer) => {
    const [loading, setLoading] = useState(true)
    setTimer *= 1000;
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, setTimer)
    })

    return loading
}
export default useFakeFetch