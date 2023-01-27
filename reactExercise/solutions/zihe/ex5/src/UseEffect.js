import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [y1, setY1] = useState(false)
    const [y2, setY2] = useState(false)
    const [y3, setY3] = useState(false)
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => { setIsLoading(false) }, 3000)
        return () => { alert('Leave?') }
    }, [])

    useEffect(() => {
        if (y1 && y2 && y3) {
            alert('All marked!')
        }
        if (y3 === true && y1 === false && y2 === false) {
            setY3(false)
        }
    }, [y1, y2, y3])

    if (isloading) {
        return <div>loading...</div>
    }
    return (
        <>
            UseEffect methods:
            <table>
                <tr><td>
                    <button
                        onClick={() => setY1(true)}>
                        1
                    </button>
                    {y1 && 'X'}
                </td></tr>
                <tr><td>
                    <button
                        onClick={() => setY2(true)}>
                        2
                    </button>
                    {y2 && 'X'}
                </td></tr>
                <tr><td>
                    <button
                        onClick={() => setY3(true)}>
                        3
                    </button>
                    {y3 && 'X'}
                </td></tr>
            </table>
        </>
    )
}
export default UseEffect;