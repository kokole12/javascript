import mocha, { describe } from "mocha";
import assert from 'assert';
import calculateNumber from "./1-calcul.js";


describe('Testing calcul', function() {
    it('testing type SUM', function() {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6)
    })

    it('testing type SUBTRACT', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })

    it('testing type DIVIDE', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    })
})
