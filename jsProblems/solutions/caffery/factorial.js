/**
 * Return the factorial of a given number.
 * factorial of 5 = 5! = 5*4*3*2*1
 * @param {*} numb 
 * @returns 
 */
function factorial(numb) {
    const x = 1
    for (i = numb; i > 0; i--) {
        x = x * i
    }
    return x
}