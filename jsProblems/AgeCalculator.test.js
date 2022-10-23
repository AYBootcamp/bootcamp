import calculateAge from './AgeCalculator'

// Works in 2022 Oct
test('Born in 1994-04-05, To be 28 years old', () => {
    expect(calculateAge("1994-04-05")).toBe(28);
});


test('Born 2022-10-18, To be 0 years old', () => {
    expect(calculateAge("2022-10-18")).toBe(0);
});


test('Born 1994-12-30, To be 27 years old', () => {
    expect(calculateAge("1994-12-30")).toBe(27);
});


test('Born in future: 2024-03-15, To be -1', () => {
    expect(calculateAge("2024-03-15")).toBe(-1);
});