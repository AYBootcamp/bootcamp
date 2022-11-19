import split from "./split";


describe('Space seperated words', () => { 
    const string ='The quick brown fox jumps over the lazy dog.';
    test("Empty pattern", ()=> {
        const splitResult = split(string, '')
        expect(splitResult[2]).toBe('e');
        expect(splitResult[8]).toBe('k');
    });
    
    test("Space pattern", ()=> {
        const splitResult = split(string, ' ')
        expect(splitResult[0]).toBe('The');
        expect(splitResult[8]).toBe('dog.');
    });
})


describe('Comma seperated words', () => { 
    const string = 'Apple,Banana,Pineapple,Grape'
    test("Empty pattern", ()=> {
        const splitResult = split(string, '')
        expect(splitResult[0]).toBe('A');
        expect(splitResult[10]).toBe('n');
    });
    
    test("Comma pattern", ()=> {
        const splitResult = split(string, ',')
        expect(splitResult[0]).toBe('Apple');
        expect(splitResult[2]).toBe('Pineapple');
    });
})
