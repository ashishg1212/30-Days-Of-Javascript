/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const map = {}

    for(let i = 0; i < arr1.length; i++) {
        map[arr1[i].id] = arr1[i] 
    }

    for(let i = 0; i < arr2.length; i++) {
        if(!map[arr2[i].id]) {
            map[arr2[i].id] = {}
        }
        for(let key in arr2[i]) {
            map[arr2[i].id][key] = arr2[i][key] 
        }
    }

    return Object.values(map)
};