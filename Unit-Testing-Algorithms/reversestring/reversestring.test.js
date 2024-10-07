const reverseString = require('./reversestring');

describe('Reverse String', () => {
    it('should be a function', ()=> {
        expect(typeof reverseString).toEqual('function'); // testing the function itself
    });

    it('should return a string', ()=> {
        expect(typeof reverseString('hello')).toEqual('string'); // invoking it, we are
// getting the type for the return value, that;s why reverseString is a string
    })

    it('should return the reversed string', ()=> {
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('bye')).toEqual('eyb');
        expect(reverseString('wow')).toEqual('wow');
        expect(reverseString('hello world')).toEqual('dlrow olleh');
    })
});