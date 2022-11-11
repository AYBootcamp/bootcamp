// Implement solution with loop, not built in array methods

/**
 * Fill an array with size number of char.
 * For example: fillArray(3, "a") => ["a", "a", "a"]
 * @param {*} size size of resulting array
 * @param {*} char the charater to fill array with
 */
function fillArray(size, char) {
    const oBject = []
    for (let i = size; i > 0; i--) {
        oBject.push(char)
    }
    return oBject
}


export default fillArray