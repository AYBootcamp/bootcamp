import filter from "./filter";

function arePositiveNums(num) {
    return num >= 0
}

test("Empty Arrays", ()=> {
    expect(filter([], arePositiveNums)).toStrictEqual([]);
});

test("Filter array", ()=> {
    expect(filter([-5, -4, -3, -2, -1, 0, 1, 2, 3])).toStrictEqual([0, 1, 2, 3]);
});
