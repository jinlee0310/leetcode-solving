var TimeLimitedCache = function () {
  this.store = {};
  this.checkTimeEnd = function () {
    const now = Date.now();
    for (let key in this.store) {
      if (this.store[key].expired - now <= 0) {
        delete this.store[key];
      }
    }
  };
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let current;
  this.checkTimeEnd();
  const expired = Date.now() + duration;
  if (this.store[key]) {
    current = true;
  } else {
    current = false;
  }
  this.store[key] = { value, expired };
  return current;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  this.checkTimeEnd();
  return this.store[key]?.value ?? -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  this.checkTimeEnd();
  return Object.keys(this.store).length;
};

