/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  let out = []
  const deck = ['rock', 'paper', 'scissors']
  
  function handGen(rounds, partial = []){
    if (rounds === 0) {
      out.push(partial)
    }else{
      for (let elem of deck) {
        handGen(rounds -1, partial.concat(elem))
      }
    }
  }
  handGen(rounds)
  return out
};
