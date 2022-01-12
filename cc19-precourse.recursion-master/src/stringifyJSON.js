/* exported stringifyJSON */

const stringifyJSON = (elem) => {
  if (typeof elem === 'number' || typeof elem === 'boolean')
    return elem.toString()

  else if (typeof elem === 'string') 
    return '"' + elem + '"'

  else if (elem instanceof Date)
    return '"' + elem.toISOString() + '"'

  else if (elem === null)
    return 'null'

  else if (Array.isArray(elem))
    return '[' + elem.map(function(subElem){
      return stringifyJSON(subElem)
    }) + ']'

  else if (typeof elem === 'object') {
    let out = '{'
    for (let key in elem) {
      if (typeof elem[key] !== 'function' && typeof elem[key] !== 'undefined')
        out += stringifyJSON(key) + ':' + stringifyJSON(elem[key]) + ','
    }
  if (out.endsWith(','))
    return out.slice(0,-1) + '}'
  else
    return out += '}'
  }
};
