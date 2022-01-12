/* exported gameGenerator accountGenerator randomInteger */

function randomInteger() {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator() {}

const accountGenerator = (initial) => {
  let balance = initial;

  return {
    withdraw: function (amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return `Here’s your money: $${amount}`;
      }
      return "Insufficient funds.";
    },
    deposit: function (amount) {
      balance = balance + amount;
      return `Your balance is: $${balance}`;
    }
  };
}
