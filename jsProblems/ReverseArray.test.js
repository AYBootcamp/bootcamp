import reverseArray from "./ReverseArray";

test("Empty Array", ()=> {
    expect(reverseArray([])).toStrictEqual([]);
});

test("Single Item Array", ()=> {
    expect(reverseArray([1])).toStrictEqual([1]);
});

test("Long Array", ()=> {
    expect(reverseArray([1, 2, 3, 4, 5, 6, 7])).toStrictEqual([7, 6, 5, 4, 3, 2, 1]);
});

test("Different type element Array", ()=> {
    expect(reverseArray([true, "1", 5, false])).toStrictEqual([false, 5, "1", true]);
});