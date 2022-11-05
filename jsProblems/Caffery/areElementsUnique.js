// Implement solution with loop, not built in array methods

/**
 * Return true iff given array contains only unique elements.
 * For example: 
 * areElementsUnique([1,2,3,4,5,6]) => true
 * areElementsUnique([1,1,3,4]) => false
 * @param {*} array 
 * @returns 
 */
//1,1,3,4,5
// function areElementsUnique(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 return false
//             }
//         }

//     }
//     return true
// }aa
function areElementsUnique(array) {
    const arrayMap = {}
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i]
        if (arrayMap[currentElement] === undefined) {
            arrayMap[currentElement] = 1
        } else {
            return false
        }
    }

    return true
}
export default areElementsUnique