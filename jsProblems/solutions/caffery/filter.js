/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Replicate Array.proptotype.filter function

The filter() method creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/
function filter(array, validationFn) {
    // let newArray = array.filter(validationFn)
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        if (validationFn(array[i])) {
            newArray.push(array[i])
        }
    } return newArray
}

export default filter