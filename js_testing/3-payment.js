import Utils from "./utils.js";
export default function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const payment =  Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is ${payment}`)
}
