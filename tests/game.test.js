const assert = require('assert');
const game = require('../game.js');
describe('Rock Paper Scissors', () => {

    it('should return \"user 1\"', () => {
        let actual1 = game.get_result("scissors", "paper");
        let actual2 = game.get_result("paper", "rock");
        let actual3 = game.get_result("rock", "scissors");

        const expected = "user 1";

        assert.equal(expected, actual1);
        assert.equal(expected, actual2);
        assert.equal(expected, actual3);
    })

    it('should return \"user 2\"', () => {
        let actual1 = game.get_result("paper", "scissors");
        let actual2 = game.get_result("rock", "paper");
        let actual3 = game.get_result("scissors", "rock");

        const expected = "user 2";

        assert.equal(expected, actual1);
        assert.equal(expected, actual2);
        assert.equal(expected, actual3);
    })

    it('should return \"draw\"', () => {
        let actual1 = game.get_result("paper", "paper");
        let actual2 = game.get_result("rock", "rock");
        let actual3 = game.get_result("scissors", "scissors");

        const expected = "draw";

        assert.equal(expected, actual1);
        assert.equal(expected, actual2);
        assert.equal(expected, actual3);
    })

    it('should throw TypeError if one of the parameters not provided', () => {
        assert.throws(() => { game.get_result() }, Error, "TypeError")
        assert.throws(() => { game.get_result(null,"paper") }, Error, "TypeError")
        assert.throws(() => { game.get_result("paper") }, Error, "TypeError")
    });

    it('should throw SyntaxError if one of the parameters is not a rock/paper/scissors', () => {
        assert.throws(() => { game.get_result("ROCK", "paper") }, Error, "SyntaxError")
    })
})