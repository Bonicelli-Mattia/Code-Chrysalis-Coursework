(() => {
  window.chrysalis = {
    fizzBuzz: (n) => {
      let arr = []
      let out = []
      for (let i=1; i<=n; i++){
        arr.push(i)
      }
      for (let i=0; i<arr.length; i++){
        if (arr[i] % (7*4) === 0)
          out.push('FizzBuzz')
        else if (arr[i] % 4 === 0) 
          out.push('Fizz')
        else if (arr[i] % 7 === 0)
          out.push('Buzz')
        else
        out.push(arr[i])
      }
    return out
    }
  };
})();

