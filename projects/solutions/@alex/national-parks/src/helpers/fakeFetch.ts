/*
 Simulate data fetching using timeout functions.
 After 3 seconds return [] by default
 */
const fakeFetch = async (ms = 3000, mockData = []) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, ms)
    })
}
export default fakeFetch
