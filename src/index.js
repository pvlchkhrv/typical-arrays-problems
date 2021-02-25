exports.min = function min(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((acc, cur) => acc > cur ? acc = cur : acc)
}

exports.max = function max(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((acc, cur) => acc < cur ? acc = cur : acc)
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((acc, cur) => acc + cur) / array.length
}
