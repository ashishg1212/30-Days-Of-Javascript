/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArray = []
    arr.forEach((element, index) => {
        if(fn(element, index)) {
            newArray.push(element)
        }
    });
    return newArray;
};