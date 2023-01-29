import { useState, useEffect } from "react"

const useReFetch = (propsTimer) => {
    const [loading, setLoading] = useState(true)
    const [timer, setTimer] = useState(propsTimer * 1000)
    const shouldReFetch = () => {
        setLoading(true)
        setTimer(propsTimer * 1000)
    }

    useEffect(() => {
        if (loading) {
            setTimeout(() => { setLoading(false) }, timer)
        }
    }, [loading, timer])

    return [loading, shouldReFetch]
}
export default useReFetch