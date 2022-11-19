import capitalize from "./capitalize";

test("Empty string", ()=> {
    expect(capitalize("")).toBe("");
});

test("Single uncapitalized word", ()=> {
    expect(capitalize("hello")).toBe("Hello");
});

test("Single capitalized word", ()=> {
    expect(capitalize("Hello")).toBe("Hello");
});

test("multiple capitalized word", ()=> {
    expect(capitalize("hello world")).toBe("Hello World");
});

test("complex sentense", ()=> {
    expect(capitalize("Hello world, THIS is bootcamp practice Problem!")).toBe("Hello World, THIS Is Bootcamp Practice Problem!");
});