/* exported laugh */


// First we intialize a string that will contain our laughter and a flag with value false for resetting purposes
// Inside the function we check wheter we finished recursing and add the final character.
// We then check wheter it's the first loop by checking the flag and raising it if it is, we add
//  the first element to our new string, and call laugh again with one less recursive loop.
// If none of the above conditions are met (our default case) we add our standard elements to the string and 
//   call laugh with one less recursive loop.
// Finally we set the flag to its false value effectively acting as a reset and return the new string

let haHaa = ''
let flag = false

function laugh(n) {

    if (n === 0) {
      haHaa += '!'
    }

    else if (flag === false) {
      haHaa = 'Ha'
      flag = true
      laugh(n-1)
    }

    else {
      haHaa +='ha'
      laugh(n-1)
    }

  flag = false
  return haHaa

}