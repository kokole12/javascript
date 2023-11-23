export default class Utils {
    static calculateNumber(type, a, b) {
        const val1 = Math.round(a);
        const val2 = Math.round(b);
    
        if (type === 'SUM') {
            return (val1 + val2);
        }
    
        if (type === 'SUBTRACT') {
            return (val1 - val2);
        }
    
        if (type === 'DIVIDE') {
            if (val2 === 0) {
                return 'Error';
            }
            return (val1 / val2);
        }
    }    
}
