import fillArray from "./fillArray";

test("Empty Array", ()=> {
    expect(fillArray(0, "a")).toStrictEqual([]);
});

test("Fill 1 value", ()=> {
    expect(fillArray(1, "a")).toStrictEqual(["a"]);
});

test("Fill multiple values", ()=> {
    expect(fillArray(3, "a")).toStrictEqual(["a", "a", "a"]);
});
