/* exported gameGenerator accountGenerator randomInteger */

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator(limit) {
  let winningNumber = randomInteger(limit)
  let guesses = 0
  return{
    guess: function (input) {
      guesses++
      if (input === winningNumber)
        return true
      else
        return false
    },
    reset: function (){
      winningNumber = randomInteger(limit)
      guesses = 0
    },
    giveUp: function(){
      let tempWin = winningNumber
      console.log('You gave up')
      this.reset()
      return tempWin
    },
    numberGuesses: function(){
      console.log('The current number of guesses is: ')
      console.log(guesses)
      return guesses
    },
    getWinner: function(){
      return winningNumber
    },
    getLimit: function(){
      return limit
    }
  }
}

const accountGenerator = (initial = 0) => {
  if (initial < 0)
    initial = 0
  let balance = initial;
  let transaction = {}
  let history = []
  return {
    withdraw: function (amount) {
      if (balance - amount >= 0) {
        let oldBal = balance
        balance = balance - amount
        transaction = {
          type: "withdrawal",
          amount: amount,
          before: oldBal,
          after: balance,
          status: "approved",
          time: new Date()
        }
      history.push(transaction)
      return transaction
    }else{
      transaction = {
        type: "withdrawal",
        amount: amount,
        before: balance,
        after: balance,
        status: "denied",
        time: new Date()
      }
    history.push(transaction)
    return transaction
    }
  },
    deposit: function (amount) {
      let oldBal = balance
      balance = balance + amount
      transaction = {
        type: "deposit",
        amount: amount,
        before: oldBal,
        after: balance,
        status: "approved",
        time: new Date()
      }
      history.push(transaction)
      return transaction
    },
    getBalance: function(){
      return balance
    },
    transactionHistory: function(n){
      return history.slice(history.length-n, history.length)
    },
    averageTransaction: function(){
      history = history.filter(function(elem){
        return elem.status === 'approved'
      })
      let deposits = history.filter(function(elem){
        return elem.type === 'deposit'
      })
      let depLen = deposits.length
      deposits = deposits.reduce(function(acc, curr){
        return acc + curr.amount
      }, 0) 
      let withdrawals = history.filter(function(elem){
        return elem.type === 'withdrawal'
      })
      let witLen = withdrawals.length
      withdrawals = withdrawals.reduce(function(acc, curr){
        return acc + curr.amount
      }, 0)
      return {
        deposit: deposits / depLen,
        withdrawal: withdrawals / witLen
      }
    }
  }
}
