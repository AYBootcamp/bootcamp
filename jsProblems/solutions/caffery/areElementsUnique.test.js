import areElementsUnique from "./areElementsUnique";

test("Empty Array", ()=> {
    expect(areElementsUnique([])).toBeTruthy();
});

test("Single element array", ()=> {
    expect(areElementsUnique(["a"])).toBeTruthy();
});

test("Multiple unique elements", ()=> {
    expect(areElementsUnique([1,2,3,4,5])).toBeTruthy();
});

test("Multiple elements", ()=> {
    expect(areElementsUnique([1,1,3,4,5])).toBeFalsy();
});

test("Same elements", ()=> {
    expect(areElementsUnique([1,1,1,1])).toBeFalsy();
});