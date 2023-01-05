import FindMatch from './FindMatch'

const emptyArray = []
const objectArray1 = [{
    a: '1',
    b: '3',
    c: '5'
}]
const objectArray2 = [{
    a: '2',
    b: '4',
    c: '6'
}]
const objectArray3 = [{
    a: '3',
    b: '5',
    c: '5'
}]

const objectArray4 = [{a: '1'}]
const objectArray5 = [{a: '1', b: '3'}]

test('Empty arrays', () => {
    expect(FindMatch(emptyArray, emptyArray)).toBe(undefined);
});


test('No Match', () => {
    expect(FindMatch(emptyArray, objectArray1)).toBe(undefined);
    expect(FindMatch(objectArray1, objectArray2)).toBe(undefined);
});

test('Single item match', () => {
    expect(FindMatch(objectArray2, objectArray3)).toEqual([{c:'5'}]);
});

test('Single item match - different index', () => {
    expect(FindMatch(objectArray1, objectArray4)).toEqual([{a:'1'}]);
});


test('Multiple items match', () => {
    expect(FindMatch(objectArray1, objectArray5)).toEqual([{a: '1', b: '3'}]);
});

test('All items match', () => {
    expect(FindMatch(objectArray1, objectArray1)).toEqual(objectArray1);
});