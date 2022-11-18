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
    // let x = [0, 1];
    // for (let i = 2; i <= n; i++) {
    //     x[i] = x[i - 1] + x[i - 2];
    // }
    // return x[n]
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}
export default fib