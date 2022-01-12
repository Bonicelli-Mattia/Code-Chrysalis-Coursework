/* exported _ */

const _ = {
  each: function (collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === "object") {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
  },

  keys: function (obj) {
    
    // We initialize an empty array to push out object keys into.
    // We call _.each with the object to test as _.each's 'collection',
    //   and a function with 2 arguments: val and key as its 'callback'.
    
    // Even though val is unused it's necessary to be passed due to the way _.each is written.
    
    // Finally we push our object's keys into the array we initialized earlier and then return it

    let objKeys = []

    _.each(obj, function(val, key){
      objKeys.push(key)
    })

    return objKeys

  },
};