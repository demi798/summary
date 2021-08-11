// 防抖(规定时间内多次触发后，只执行最后一次)
function debounce(cb, wait) {
    // test
    if (typeof cb === 'function') {
        let wait = null;
        if (wait !== null) clearTimeout(wait);
        wait = setTimeout(cb, wait);
    }
}

// 节流(多次触发，只在规定时间后执行)
function throttle(cb, delay) {
    if (typeof cb === 'function') {
        let startTime = Date.now();
        let timer = null;
        return function() {
            const context = this;
            const ars = arguments;
            let curTime = Date.now();
            let remaining = delay - (curTime - startTime);
            clearTimeout(timer);
            if (remaining <= 0) {
                cb.apply(context, ars);
                startTime = Date.now();
            } else {
                timer = setTimeout(cb, remaining);
            }
        }
    }
}