// 手动实现bind函数
function bind(thisArg) {
    if (!Function.prototype.bind) (function() {
        let slice = Array.prototype.slice;
        Function.prototype.bind = function() {
            let thatFun = this;
            let thatArg = arguments[0];
            let args = slice.call(arguments, 1);

            if (typeof thatFun !== 'function') {
                throw new TypeError('Function.prototype.bind- what is trying to be bound is not a callable');
            }
            return function() {
                let funcArgs = args.concat(slice.call(arguments));
                // apply 的返回值为调用有指定this值和参数的函数的结果
                return thatFun.apply(thatArg, funcArgs);
            }
        }
    })()
}