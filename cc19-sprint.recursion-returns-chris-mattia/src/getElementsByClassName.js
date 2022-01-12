const getElementsByClassName = (targetClass) => {
  const result = [];
  const childList = document.children;

  // base case === exit case
  // works towards base,
  // recursion

  function recursiveElement(elemToCheck) {
    // if this elemToCheck has [targetClass] push to result
    for (const element of elemToCheck) {
      if (element.classList.contains(targetClass)) {
        result.push(element);
      }
      //else if (element.className.contains)
      if (element.hasChildNodes()) {
        recursiveElement(element.children);
      }
    }
  }

  recursiveElement(childList);
  return result;
  // Go through all child elements of document
  // push them to an array
  // return the array
};

module.exports = { getElementsByClassName };
