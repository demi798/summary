// 深拷贝
function deepClone(val) {
    // 判断是否基本数据类型
    const isPrimitive = (val) => {
        return (typeof val === 'string') || 
        (typeof val === 'number') || 
        (typeof val === 'symbol') || 
        (typeof val === 'undefined') ||
        (typeof val === 'boolean') ||
        (val === 'null')
    };
    // 判断是否为数组
    const isArr = (val) => {
        return Array.isArray(val);
    }
    // 判断是否为 Map
    const isMap = (val) => {
        return Object.prototype.toString.call(val) === '[object Map]';
    }
    // 判断是否为 Set
    const isSet = (val) => {
        return Object.prototype.toString.call(val) === '[object Set]';
    }
    // 判断是否为 Object
    const isObj = (val) => {
        return Object.prototype.toString.call(val) === '[object Object]';
    }

    if (isPrimitive(val)) {
        return val;
    } else if (isArr(val)) {
        let newArr = [];
        for (let i=0; i<val.length; i++) {
            newArr[i] = deepClone(val[i]);
        }
        return newArr;
    } else if (isMap(val)) {
        return new Map(val);
    } else if (isSet(val)) {
        return new Set(val);
    } else if (isObj(val)) {
        let newObj = {};
        for (let i in val) {
            newObj[i] = deepClone(val[i]);
        }
        return newObj;
    }
    // 不属于上述类型的直接返回
    return value;
}

// 示例
let a = {
    c: 1
};
let b = {a};
let set = new Set();
let map = new Map();
let expReg = /.*/;
let date = new Date();
let f = [{a: 1}, 5, null, {v: 3}, new Date, b, [map, set, expReg, date]]
let d = deepClone(f); 
b['a'] = f;
map.set('djka', [2]);
set.add(41231);
console.log('f: ', f);
console.log('clone-d: ', d);