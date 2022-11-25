/**
 * Return true iff the given number is a power of two
 * otherwise return false
 * Example:
 *  isPowOfTwo(4) => true 
 *  isPowOfTwo(9) => false
 * @param {*} numb numb is an integer
 * @returns boolean
 */
function isPowOfTwo(numb) {
    if (numb == 0) {
        return true
    } else
        if (numb == 2) {
            return true
        } else {
            if (numb > 2) {
                numb = numb / 2
                return isPowOfTwo(numb)
            }
        }
    return false
}

export default isPowOfTwo