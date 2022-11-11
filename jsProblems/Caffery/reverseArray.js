// Implement solution with loop, not built in array methods

/**
 * Given an array of any size, return the reversed array.
 * Example reverseArray([1, true, 2, 5, 11, 0]) => [0, 11, 5, 2, true, 1]
 * @param {*} array 
 * @returns reversed array
 */
function reverseArray(array) {
    const finalArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        finalArray.push(array[i])
    }
    return finalArray
}

export default reverseArray