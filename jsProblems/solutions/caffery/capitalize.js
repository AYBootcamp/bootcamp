/**
 * Caplitalize every word's first chrarcter
 * For example:
 * capitalize("hello") -> "Hello"
 * capitalize("hello world") -> "Hello World"
 * @param {string} string string of any length
 * @returns Capitalized words
 */
function capitalize(string) {
    const arrAy = string.split(" ")
    for (let i = 0; i < arrAy.length; i++) {
        arrAy[i] = arrAy[i].charAt(0).toUpperCase() + arrAy[i].slice(1)
    }
    const string2 = arrAy.join(" ");
    return string2
}
export default capitalize