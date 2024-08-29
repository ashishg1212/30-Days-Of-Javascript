/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const group = {};
    this.forEach((element) => {
        let key = fn(element);
        if(!group[key]) {
            group[key] = [];
        } 
        group[key].push(element);
        
    });
    return group;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */