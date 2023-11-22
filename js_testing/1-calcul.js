#!/usr/bin/node

export default function calculateNumber(type, a, b) {
    if (type === 'SUM') {
        return parseInt(Math.round(a) + Math.round(b));
    }

    else if (type === 'SUBTRACT') {
        return parseInt(Math.round(a) - Math.round(b));
    }

    else if (type === 'DIVIDE') {
        return parseInt(Math.round(a) / Math.round(b));
    }

    else {
        return 'Error'
    }
}
