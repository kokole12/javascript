import mocha from "mocha";
import sinon from 'sinon';
import sendPaymentRequestToApi from "./3-payment.js";
import { expect } from "chai";
import Utils from "./utils.js";


describe('sendPaymentRequestToApi', function() {
    it('testing the number of call', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 3)
        expect(spy.calledOnce).to.be.true;
        sinon.restore();
    })
})
