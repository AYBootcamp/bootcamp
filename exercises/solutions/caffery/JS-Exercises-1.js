function nAme(Myname = "Zhaosi") {
    console.log("Hi, nice to meet you " + Myname + "!");
}
nAme()



function sum(x, y) {
    return x + y;
}
let n = sum(10, 8)
console.log(n)


let checkarray = [true, false, "oshdiuhr", 10, 15, 200, "si"]
for (let i = 0; i < checkarray.length; i++) {
    if (typeof checkarray[i] === "string" && checkarray[i].length > 3) {
        console.log("true")
    } else if (typeof checkarray[i] === "number" && checkarray[i] % 10 === 0) {
        console.log("true")
    } else if (typeof checkarray[i] === "boolean") {
        console.log("true")
    } else {
        console.log("false")
    }
}