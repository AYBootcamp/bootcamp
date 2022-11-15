import concat from "./concat";

test("Empty Arrays", () => {
    expect(concat([], [])).toStrictEqual([]);
});

test("2 single item Arrays", () => {
    expect(concat([1], [2])).toStrictEqual([1, 2]);
});

test("Nested Arrays", () => {
    expect(concat([1], [[2], 3, 4, 5])).toStrictEqual([1, [2], 3, 4, 5]);
});