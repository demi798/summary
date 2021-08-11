// 防抖(规定时间内多次触发后，只执行最后一次)
function debounce(cb, wait) {
    if (typeof cb === 'function') {
        let wait = null;
        if (wait !== null) clearTimeout(wait);
        wait = setTimeout(cb, wait);
    }
}

// 节流(多次触发，只在规定时间后执行)
function throttle(cb, delay=0) {
    if (typeof cb !== 'function') {
        throw new TypeError('need a function');
    }

    let timeid = null;
    let startTime = Date.now();

    return function() {
        let context = this;
        let args = arguments;
        let curTime = Date.now();
        let remaining = delay - (curTime - startTime);
        if (timeid) {
            clearTimeout(timeid);
        }
        if (remaining <= 0) {
            cb.apply(context, args);
            startTime = Date.now();
            timeid = null;
        } else {
            timeid = setTimeout(function() {
                cb.apply(context, args);
            }, wait);
        }
    }
}

// 升级版防抖
// 升级点：
// 1、 明确 this 指向； 
// 2、 继承函数传参
// 3、 增加返回值
function upDebounce(cb, wait=0) {
    if (typeof cb !== 'function') {
        throw new TypeError('need a function arguments')
    }
    let timeid = null;
    let result;
    
    return function() {
        let context = this;
        let args = arguments;

        if (timeid) {
            clearTimeout(timeid);
        }
        timeid = setTimeout(function() {
            result = cb.apply(context, args);
        }, wait);
        
        return result;
    }
}