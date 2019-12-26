// 10 个 Ajax 同时发起请求，全部返回展示结果，并且至多允许三次失败，说出设计思路
let successCount = 0;
let failCount = 0;
let datas = [];
// 非promise方法
ajax(function(res) {
    if (success) {
        successCount++;
        if (successCount + failCount === 10) {
            console.log(datas);
        } else {
            datas.push(res.data);
        }
    } else {
        failCount++;
        if (failCount > 3) {
            throw new Error('失败请求已大于三个');
        }
    }
});

// promise方法
let resData = new Promise((res, rej) => {
    if (success) {
        res(res.data);
    } else {
        failCount++;
        if (failCount > 3) {
            rej(error);
        } else {
            res(error);
        }
    }
});
Promise.all([resData]).then(v => {
    console.log(v);
});