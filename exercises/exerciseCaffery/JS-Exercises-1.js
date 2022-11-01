function Name(Myname = "Zhaosi") {
    console.log("Hi, nice to meet you " + Myname + "!");
}
Name()



function sum(x, y) {
    return x + y;
}
let n = sum(10, 8)
console.log(n)


let checkarray = [true, false, "oshdiuhr", 10, 15, 200, "si"]
for (let i = 0; i < checkarray.length; i++) {
    if (checkarray[i].length > 3) {
        console.log("true")
    } else if (checkarray[i] % 10 == 0) {
        console.log("true")
    } else if (checkarray[i] == true) {
        console.log("true")
    } else if (checkarray[i] == false) {
        console.log("true")
    } else {
        console.log("false")
    }
}