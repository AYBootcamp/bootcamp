import factorial from "./factorial";

test("Base case: Zero and One", ()=> {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
});

test("5!", ()=> {
    expect(factorial(5)).toBe(120);
});


test("10!", ()=> {
    expect(factorial(10)).toBe(3628800);
});
