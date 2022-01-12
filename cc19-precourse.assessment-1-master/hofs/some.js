/* exported some */

function some(array, callback) {
    
    // First checks if a callback is passed, loops through the array and returns true if it finds a truthy value.
    // If there's a callback it checks if the callback called on the array element being iterated returns true
    //   and if it does returns true.
    // If none of the above conditions are met returns false.

    if (callback === undefined) {
      for (let i=0; i<array.length; i++) { 
        if (array[i]) {
          return true
        }
      }
    } 
    else {
      for (let i=0; i<array.length; i++) {
        if (callback(array[i]) === true) {
          return true
        }
      }
    }

    return false

}