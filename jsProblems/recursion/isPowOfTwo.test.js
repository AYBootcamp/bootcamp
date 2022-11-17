import isPowOfTwo from "./isPowOfTwo";

// Special case
test("0", ()=> {
    expect(isPowOfTwo(1)).toBeTruthy();
});

test("-2", ()=> {
    expect(isPowOfTwo(-2)).toBeFalsy();
});

// Falsy cases
test("9", ()=> {
    expect(isPowOfTwo(9)).toBeFalsy();
});

test("10", ()=> {
    expect(isPowOfTwo(10)).toBeFalsy();
});

test("11", ()=> {
    expect(isPowOfTwo(11)).toBeFalsy();
});

// Truthy cases
test("2", ()=> {
    expect(isPowOfTwo(2)).toBeTruthy();
});

test("8", ()=> {
    expect(isPowOfTwo(8)).toBeTruthy();
});

test("256", ()=> {
    expect(isPowOfTwo(256)).toBeTruthy();
});
