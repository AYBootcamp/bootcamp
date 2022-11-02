import fibonacciNumbers from "./fibonacciNumbers";

test("Zero", ()=> {
    expect(fibonacciNumbers(0)).toBe(0);
});

test("Base Fibonacci numbers", ()=> {
    expect(fibonacciNumbers(1)).toBe(1);
    expect(fibonacciNumbers(2)).toBe(2);
});

test("Fib 10", ()=> {
    expect(fibonacciNumbers(10)).toBe(55);
});

test("Fib 20", ()=> {
    expect(fibonacciNumbers(20)).toBe(6765);
});

test("Fib 25", ()=> {
    expect(fibonacciNumbers(25)).toBe(fibonacciNumbers(24) + fibonacciNumbers(23));
});