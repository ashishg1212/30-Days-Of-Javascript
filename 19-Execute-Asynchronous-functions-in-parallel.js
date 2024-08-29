/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const result = [];
        let complete = 0;

        functions.forEach((fn, index) => {
            fn()
            .then(val => {
                result[index] = val;
                complete++;
                if(complete === functions.length) {
                    resolve(result);
                }
            })
            .catch((err) => reject(err));
        });
        if(complete === functions.length) {
                    resolve(result);
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */