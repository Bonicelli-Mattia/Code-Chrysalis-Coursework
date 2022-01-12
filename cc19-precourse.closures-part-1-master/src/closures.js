/* exported counterGenerator getAndSet power betterCounterGenerator */


const counterGenerator = () => {
  let count = 0
  function secondary(){
    count++
    return count
  }
  return secondary
}

const getAndSet = () => {
  let _val = undefined
  return {
    get: function() {
        return _val
    },
    set: function(newVal) {
      _val = newVal
    }
  }
}

const power = (exponent) => {
  if (typeof exponent !== 'number')
    return NaN
  return (base) => {
    let result = 1
    for (let i=0; i<exponent; i++)
      result = result * base
    return result
  };
}

const betterCounterGenerator = (num = 0) => {
  if (typeof num !== 'number')
    return NaN
  let _count = num
  return {
    up: function(){
      _count++
      return _count
    },
    down: function(){
      _count--
      return _count
    },
    reset: function(){
      _count = num
      return _count
    }
  }
}