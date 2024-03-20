const assert = require('assert');
const calculator = require('../calculator.js');
describe('Calculator', () => {

    it('should add two numbers', () => {
        const actual = calculator.operate(1, 2, '+');
        const expected = 3;
        assert.equal(expected, actual);
    });

    it('should subtract two numbers', () => {
        const actual = calculator.operate(1, 2, '-');
        const expected = -1;
        assert.equal(expected, actual);
    });

    it('should multiply two numbers', () => {
        const actual = calculator.operate(2, 2, '*');
        const expected = 4;
        assert.equal(expected, actual);
    })


    it('should divide two numbers', () => {
        const actual = calculator.operate(2, 2, '/');
        const expected = 1;
        assert.equal(expected, actual);
    })

    it('should throw an error when a number is not a number', () => {
        assert.throws(() => {
            calculator.operate('1', 2, '+');
        });
    });

});