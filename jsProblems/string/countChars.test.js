import countChars from "./countChars";

test("Empty string", ()=> {
    expect(countChars("")).toStrictEqual({});
});

test("Single character string", ()=> {
    expect(countChars("a")).toStrictEqual({a: 1});
});

test("Lengthy string", ()=> {
    expect(countChars("abcd")).toStrictEqual({
        a: 1,
        b: 1,
        c: 1,
        d: 1
    });
});

test("Lengthy duplicate string", ()=> {
    expect(countChars("abcdabcd")).toStrictEqual({
        a: 2,
        b: 2,
        c: 2,
        d: 2
    });
});
