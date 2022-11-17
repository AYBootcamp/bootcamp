/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Replicate String.prototype.split() function

The split() method takes a pattern 
and divides a String into an ordered list of substrings 
by searching for the pattern, puts these substrings into an array,
and returns the array.
*/
function split(str, pattern) {
    // built-in implementation
    return str.split(pattern)
}

export default split