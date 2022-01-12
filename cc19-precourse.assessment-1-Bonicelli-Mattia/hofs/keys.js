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

  keys: function (/* something here? */) {},
};
