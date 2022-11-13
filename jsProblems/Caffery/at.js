/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
Replicate Array.proptotype.at function

The at() method takes an integer value and returns the item at that index, 
allowing for positive and negative integers.
Negative integers count back from the last item in the array.
*/
function at(array, index) {
    // return array.at(index)
    let i = index
    if (i >= 0 && array.length > 0 && i <= array.length) {
        return array[i]
    } else if (i < 0 && array.length > 0 && (i * -1) <= array.length) {
        return array[array.length + i]
    } else {
        return undefined
    }
}

export default at