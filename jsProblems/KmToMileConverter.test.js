import KmToMileConverter from './KmToMileConverter'

test('50 KM should be 31 Miles', () => {
    expect(KmToMileConverter(50)).toBe(31);
});

test('100 KM should be 62 Miles', () => {
    expect(KmToMileConverter(100)).toBe(62);
});

test('0 KM should be 0 Miles', () => {
    expect(KmToMileConverter(0)).toBe(0);
});

test('32 KM should be 19 Miles', () => {
    expect(KmToMileConverter(32)).toBe(19);
});