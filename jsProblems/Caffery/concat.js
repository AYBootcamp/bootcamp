/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Replicate Array.proptotype.concat function

The concat() method is used to merge two or more arrays. 
This method does not change the existing arrays, but instead returns a new array.
*/
function concat(array1, arrary2) {
    // const newArray = array1.concat(arrary2);
    const newArray = []
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
        for (let j = 0; j < arrary2.length; j++) {
            newArray.push(arrary2[j]);
        }
    }
    return newArray;
}

export default concat