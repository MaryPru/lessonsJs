
function sumCurried  (fn){
    function next (...args){
        return x => {
            if (!x) {
                return args.reduce((acc, a) => {
                    return fn.call(fn, acc, a)
                }, 0);
            }
            return next(...args, x);
        };
    }
    return next();
}

const sum = function sumCurry(x, y) {
    return x + y;
}
let curriedSum = sumCurried(sum);

console.log(curriedSum(1)(3)(4)(2)(4)(1)(3)(4)(2)(4)());