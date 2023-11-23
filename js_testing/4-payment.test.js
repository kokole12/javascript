import mocha from "mocha";
import sinon from 'sinon';
import sendPaymentRequestToApi from "./3-payment.js";
import { expect } from "chai";
import Utils from "./utils.js";
import calculateNumber from "./1-calcul.js";


describe('sendPaymentRequestToApi', function() {
    it('testing the number of call', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 3)
        expect(spy.calledOnce).to.be.true;
        sinon.restore();
    })

    it('studing the function call to resutrn 10', function() {
        const stud = sinon.stub(Utils, 'calculateNumber')
        stud.returns(10)
        const result = calculateNumber('SUM', 100, 20);
        expect(result).to.equal(10);
        stud.restore();
    })
})
