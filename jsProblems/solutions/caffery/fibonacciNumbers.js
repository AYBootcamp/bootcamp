/**
 * Return the n-th Fibonacci number
 * For example: 
 * fib(1) -> 1
 * fib(3) -> 2
 * fib(4) -> 3
 * @param {*} n 
 * @returns 
 */
function fib(n) {

    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}
export default fib