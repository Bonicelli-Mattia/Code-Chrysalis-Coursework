class VendingMachine {
  constructor() {
    const juice = { name: "juice", price: 1200, count: 16 };
    const brandedCoffee = { name: "brandedCoffee", price: 150, count: 3 };
    const soda = { name: "soda", price: 150, count: 3 };
    const sportsDrink = { name: "sportsDrink", price: 150, count: 3 };
    const croissant = { name: "croissant", price: 150, count: 3 };
    const nonBrandedCoffee = { name: "nonBrandedCofee", price: 300, count: 8 };
    const donuts = { name: "donuts", price: 900, count: 8976 };
    const cake = { name: "cake", price: 150, count: 3 };
    const muffin = { name: "muffin", price: 100, count: 36 };
    const riceBall = { name: "riceBall", price: 900, count: 6 };
    const lollypop = { name: "lollypop", price: 180, count: 8 };
    const panties = { name: "panties", price: 50, count: 4 };
    const cigs = { name: "cigs", price: 200, count: 16 };
    const cigar = { name: "cigar", price: 10, count: 14 };
    const jazzGrass = { name: "donuts", price: 900, count: 6 };
    const socks = { name: "socks", price: 6700, count: 3 };

    this._balance = 0;
    this.balance = function () {
      return this._balance;
    };

    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };

    this.insertCoin = function (denomination) {
      const validCoins = [10, 50, 100, 500];
      if (typeof denomination === "number") {
        if (validCoins.includes(denomination)) {
          this.till[denomination]++;
          this._balance += denomination;
        }
      }
    };

    this.change = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };

    this.changeReturn = function () {
      while (this._balance >= 500) {
        this._balance -= 500;
        this.change[500]++;
        this.till[500]--;
      }
      while (this._balance >= 100) {
        this._balance -= 100;
        this.change[100]++;
        this.till[100]--;
      }
      while (this._balance >= 50) {
        this._balance -= 50;
        this.change[50]++;
        this.till[50]--;
      }
      while (this._balance >= 10) {
        this._balance -= 10;
        this.change[10]++;
        this.till[10]--;
      }

      console.log(this.change);
    };

    this.chosenRow = "empty";
    this.mappedRow = -1;
    this.pressButtonRow = function (row) {
      if (row === "A") {
        this.mappedRow = 0;
        this.chosenRow = row;
        console.log("Row A was selected");
      }
      if (row === "B") {
        this.mappedRow = 1;
        this.chosenRow = row;
        console.log("Row B was selected");
      }
      if (row === "C") {
        this.mappedRow = 2;
        this.chosenRow = row;
        console.log("Row C was selected");
      }
      if (row === "D") {
        this.mappedRow = 3;
        this.chosenRow = row;
        console.log("Row D was selected");
      }
    };

    this.chosenColumn = 0;
    this.mappedColumn = -1;
    this.pressButtonColumn = function (column) {
      if (column >= 1 && column <= 4) {
        this.chosenColumn = column;
        this.mappedColumn = column - 1;
        if (this.chosenRow !== "empty") {
          this.sell();
        }
      }
    };

    this.inventory = [
      [juice, brandedCoffee, soda, sportsDrink],
      [croissant, nonBrandedCoffee, donuts, cake],
      [muffin, riceBall, lollypop, panties],
      [cigs, cigar, jazzGrass, socks],
    ];

    this.sell = function () {
      let item = this.inventory[this.mappedRow][this.mappedColumn];
      console.log(item);
      if (this._balance >= item.price && item.count >= 1) {
        console.log(
          `chosen row: ${this.chosenRow}, chosen column: ${this.chosenColumn}`
        );
        console.log("Here is your: " + item.name);
        this._balance -= item.price;
        item.count--;
        this.changeReturn();
      } else if (item.count === 0) {
        console.log("Error: Out of stock");
      } else if (item.price >= this._balance) {
        console.log("Error: Insufficient funds");
      }
    };
  }
}

module.exports = VendingMachine;
