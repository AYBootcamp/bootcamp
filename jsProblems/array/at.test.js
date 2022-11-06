import at from "./at";

test("Empty Array, 0 index", ()=> {
    expect(at([], 0)).toBe(undefined);
});

test("valid possitive index", ()=> {
    expect(at([1,2,3,4,5], 2)).toBe(3);
});

test("valid 0 index", ()=> {
    expect(at([1,2,3,4,5], 0)).toBe(1);
});

test("valid negative index", ()=> {
    expect(at([1,2,3,4,5], -1)).toBe(5);
});

test("invalid possitive index", ()=> {
    expect(at([1,2,3,4,5], 100)).toBe(undefined);
});

test("invalid negative index", ()=> {
    expect(at([1,2,3,4,5], -100)).toBe(undefined);
});