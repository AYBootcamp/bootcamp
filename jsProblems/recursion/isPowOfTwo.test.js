import isPowOfTwo from "./isPowOfTwo";

test("0", ()=> {
    expect(isPowOfTwo(1)).toBeTruthy();
});

test("9", ()=> {
    expect(isPowOfTwo(9)).toBeFalsy();
});

test("256", ()=> {
    expect(isPowOfTwo(256)).toBeTruthy();
});
