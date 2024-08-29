var TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currTime = Date.now();
    const expireTime = currTime + duration;
    const isExist = this.cache[key] !== undefined;
    this.cache[key] = {value: value, expire: expireTime};
    return isExist;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const currTime = Date.now();
    const entry = this.cache[key];
    if(entry && entry.expire > currTime) {
        return entry.value;
    }
    delete this.cache[key];
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currTime = Date.now();
    let count = 0;
    for(let key in this.cache) {
        if(this.cache[key].expire > currTime) {
            count++;
        } else {
            delete this.cache[key];
        }
    }
    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */