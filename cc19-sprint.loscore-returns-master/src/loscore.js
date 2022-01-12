// Let's make an object and start adding methods to it!
class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */
  uniq(array) {
    // create results array
    // iterates over results array and check if value exists
    // if value doesn't exist push value

    const results = [];
    results.push(array[0]);

    for (let i = 0; i < array.length; i++) {
      let checker = false;
      for (let j = 0; j < results.length; j++) {
        if (array[i] === results[j]) {
          checker = true;
        }
      }
      if (checker === false) {
        results.push(array[i]);
      }
      checker = false;
    }
    return results;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  map(collection, iteratee) {
    // iterates over collection
    // pass value, key / index, collection to iteratee
    const result = [];
    this.each(collection, (v) => {
      result.push(iteratee(v));
    });

    return result;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    const out = [];
    const unwanted = this.filter(collection, test);
    let checker = false;

    for (let i = 0; i < collection.length; i++) {
      for (let j = 0; j < unwanted.length; j++) {
        if (collection[i] === unwanted[j]) {
          checker = true;
        }
      }
      if (checker === false) {
        out.push(collection[i]);
      }
      checker = false;
    }
    return out;
  }

  reduce(collection, iterator, accumulator) {
    // if no accumulator then collection[i] = accumulator
    // reduce to single value by calling iterator(ac, item)
    // ac should be return value of previous iterator call
    let arr = [];

    if (accumulator === undefined) {
      accumulator = collection[0];
      arr = collection.slice(1);
      this.each(arr, (v) => {
        accumulator = iterator(accumulator, v);
      });
    } else {
      this.each(collection, (v) => {
        accumulator = iterator(accumulator, v);
      });
    }

    return accumulator;
  }

  every(array, test) {
    if (array.length === 0) {
      return true;
    }

    if (arguments.length < 2) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) {
          return false;
        }
        if (array[i] !== true) {
          return false;
        }
      }
      return true;
    }

    for (let i = 0; i < array.length; i++) {
      if ((test(array[i]) === false) | (test(array[i]) === undefined)) {
        return false;
      }
    }
    return true;
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj, ...args) {
    const argsTemp = [];
    // first objA
    // var = objB-z
    // push var to objA keys
    for (let i = 0; i < args.length; i++) {
      argsTemp.push(args[i]);
    }
    // start with first object
    // iterates over preceding objects
    // writes to first object with params of preceding objects
    if (argsTemp.length) {
      // args = args.slice(1);
      for (const objTemp of argsTemp) {
        this.each(objTemp, (v, k) => {
          obj[k] = v;
        });
      }
    }
    return obj;
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    let flag = false;
    let cache;

    return () => {
      if (flag === false) {
        cache = func();
        flag = true;
      }
      return cache;
    };
  }

  memoize(func) {
    // store func results in a cache (object)
    // return a function, when called will check if result is in cache
    // return cache value if exists
    const cache = {};
    return (n) => {
      if (n in cache) {
        return cache.n;
      }
      cache[n] = func(n);
      return cache[n];
    };
  }

  invoke(collection, functionOrKey) {
    // call the function with name methodOrKey on collection
    // if methodOrKey is a function, apply values directly onto it.

    if (typeof functionOrKey === "string") {
      for (let i = 0; i < collection.length; i++) {
        collection[i] = collection[i][functionOrKey].apply(collection[i]);
      }
      return collection;
    }
    for (let i = 0; i < collection.length; i++) {
      collection[i] = functionOrKey.apply(collection[i]);
    }
    return collection;
  }

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy() {
    // YOUR CODE HERE
  }

  zip() {
    // YOUR CODE HREE
  }

  delay() {
    // YOUR CODE HERE
  }

  defaults() {
    // YOUR CODE HERE
  }

  throttle() {
    // YOUR CODE HERE
  }
}

module.exports = new LoScore();
