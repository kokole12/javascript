import mocha, { describe } from "mocha";
import assert from 'assert'
import calculateNumber from "./0-calcul.js";

describe('test addition', function() {
    it('testing adding constants', function() {
        assert.equal(calculateNumber(2,3), 5)
    })

    it('adding integer and float', function() {
        assert.equal(calculateNumber(1, 3.7), 5)
    })

    it('testing adding floats', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5)
    })

    it('testing adding floats', function() {
        assert.equal(calculateNumber(1.5, 3.7), 6)
    })
})

