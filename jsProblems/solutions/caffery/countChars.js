/**
 * Count the appearence of each character in the string, and return a map.
 * For example: 
 * countChars("abc") => { "a": 1, "b": 1, "c": 1 }
 * @param {string} string a string string of any size
 * @returns a map of every character and it's appearences
 */
function countChars(string) {
    const stringMap = {}
    for (let i = 0; i < string.length; i++) {
        const cHar = string[i];
        if (stringMap[cHar] === undefined) {
            stringMap[cHar] = 0
        }
        stringMap[cHar]++
    }
    return stringMap
}

export default countChars