(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    return val
  };

  _.add = (x, y) => {
    return x + y;
  };

  /**
  | ARRAYS
  |~~~~~~~~~~
  **/ 

  _.head = (array) => {
    return array[0];
  };

  _.tail = (array) => {
    return array.slice(1, array.length)
  };

  _.take = (array, n = 1) => {
    return array.slice(0, n)
  };

  _.takeRight = (array, n = 1) => {
    if (n > array.length)
      n = array.length
    return array.slice(array.length - n , array.length)
  };

  _.uniq = (array) => {
    let newArr = []
    for (let i=0; i<array.length; i++){
      let flag = false
      for (let j=0; j<array.length; j++){
        if (array[i] === newArr[j])
          flag = true
      }
      if (flag === false)
        newArr.push(array[i])
    }
    return newArr
  };
  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    return Object.keys(collection).length
  };
  _.each = (collection, iteratee) => {
    if (Array.isArray(collection) === true){
      for (let i=0; i<collection.length; i++){
        iteratee(collection[i], i, collection)
      }    
    }
    else {
      for (let i=0; i<Object.keys(collection).length; i++){
        iteratee(Object.values(collection)[i], Object.keys(collection)[i], collection)
      }
    }
  };

  _.indexOf = (array, target) => {
    let counter = -1
    let index = -1
    _.each(array, function(elem){
      counter++
      if (elem === target && index === -1){
        index = counter
      }
    })
    return index
  };

  _.map = (collection, iteratee) => {
    let newArr = []
    _.each(collection, function(elem){
      newArr.push(iteratee(elem))
    })
    return newArr
  };

  _.filter = (collection, test) => {
    let newArr = []
    _.each(collection, function(elem){
      if (test(elem) === true)
        newArr.push(elem)
    })
    return newArr
  };

  _.reject = (collection, test) => {
    let newArr = []
    _.filter(collection, function(elem){
      if (test(elem) === false)
        newArr.push(elem)
    })
    return newArr
  };

  _.pluck = (collection, key) => {
    let outArr = []
    for (let i=0; i < Object.keys(collection).length; i++){
      outArr.push((collection[i][key]))
    }
    return outArr
  };

  _.reduce = function(collection, iterator, accumulator){
    let flag = false
    if (arguments.length < 3)
      flag = true
    _.each(collection, function(item){
      if (flag === true) {
        accumulator = collection[0]
        flag = false
      } else accumulator = iterator(accumulator, item);
    })
    return accumulator;
  };

  _.contains = (collection, target) => {
    return _.reduce(collection, (wasFound, item) => {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function (collection, test) {
    if (collection.length === 0)
      return true
    if(test === undefined){
      test = function(elem){
        return elem
      }
    }
    return _.reduce(collection, function(acc, curr){
      if (!test(curr))
        return false
      else
        return acc
    }, true)
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (obj) {
    let addee = []
    for (let i=1; i<arguments.length; i++){
      addee.push(arguments[i])
    }
    _.each(addee, function(elem){
      Object.assign(obj, elem)
    })
    return obj
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
  let flag = false
  let cache = undefined
  return function(elem){
    if (flag === true)
      return cache
    flag = true
    cache = func(elem)
    return cache
  }};

  _.memoize = function (func) {
    let cache = {}
    return function(elem){
      if (cache[JSON.stringify(elem)] !== undefined)
        return cache[JSON.stringify(elem)]
      else
        cache[JSON.stringify(elem)] = func(elem)
    return cache[JSON.stringify(elem)]
    }
  };
  
  _.invoke = function (collection, functionOrKey) {
    let out = []
    _.each(collection, function(elem){
      if (typeof(functionOrKey) === 'string'){
        out.push(elem[functionOrKey].apply(elem))
      }
      else
        out.push(functionOrKey.apply(elem))
    })
    return out
  };

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  **/

  _.sortBy = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.zip = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.delay = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.defaults = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.throttle = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };
})();

