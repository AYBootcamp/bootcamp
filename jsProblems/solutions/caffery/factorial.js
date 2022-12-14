/**
 * Return the factorial of a given number.
 * factorial of 5 = 5! = 5*4*3*2*1
 * @param {*} numb 
 * @returns 
 */
function factorial(numb) {

    if (numb <= 1) {
        return 1
    }
    return numb * factorial(numb - 1)
}
export default factorial