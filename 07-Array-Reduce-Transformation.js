/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var accum = init
    nums.forEach((element) => {
        accum = fn(accum, element)
    })
    return accum;
};