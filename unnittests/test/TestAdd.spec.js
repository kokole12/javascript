const assert = require('assert')
const calc = require('../app')

describe('adding two values', function() {
    it('testing addition of two positive integers', function() {
        assert.equal('SUM', calc(3, 2), 5)
    });
});
