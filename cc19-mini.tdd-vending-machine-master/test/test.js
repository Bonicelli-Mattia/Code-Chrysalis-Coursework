const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

let machine;
// takes care of side effects
beforeEach(function () {
  machine = new VendingMachine();
  machine._balance = 0;
  machine.till[10] = 0;
  machine.till[50] = 0;
  machine.till[100] = 0;
  machine.till[500] = 0;
});

describe("vending machine", () => {
  it("should exist", () => {
    expect(machine).to.exist;
  });

  it("should have an insertCoin method", () => {
    expect(machine.insertCoin).to.exist;
  });

  it("should have a balance", () => {
    expect(machine.balance).to.exist;
  });
}),
  describe("insertCoin", () => {
    it("should take in valid coins", () => {
      machine.insertCoin(10);
      machine.insertCoin(10);
      machine.insertCoin(50);
      expect(machine.till[10]).to.equal(2);
      expect(machine.till[50]).to.equal(1);
    });

    it("should add to the balance", () => {
      machine.insertCoin(10);
      machine.insertCoin(10);
      expect(machine._balance).to.not.equal(0);
    });
  }),
  describe("till", () => {
    it("should return the correct number of inserted coins", () => {
      machine.insertCoin(10);
      machine.insertCoin(10);
      machine.insertCoin(10);
      machine.insertCoin(23);

      expect(machine.till[10]).to.equal(3);
      expect(machine.till[100]).to.equal(0);

      machine.insertCoin(100);
      expect(machine.till[100]).to.equal(1);
    });
  }),
  describe("balance", () => {
    it("should be initialized as 0", () => {
      machine.balance();
      expect(machine._balance).to.equal(0);
    });
    it("should return the correct balance", () => {
      machine.insertCoin(10);
      machine.insertCoin(15);
      expect(machine.balance()).to.equal(10);
    });
  }),
  describe("changeReturn", () => {
    it("should reset balance to zero", () => {
      machine.insertCoin(10);
      machine.insertCoin(500);

      machine.changeReturn();

      expect(machine._balance).to.equal(0);
    });
  }),
  describe("pressButtonRow", () => {
    it("should store a valid value", () => {
      machine.pressButtonRow("A");
      expect(machine.chosenRow).to.equal("A");
    });
    it("should map the value to an array index", () => {
      machine.pressButtonRow("A");
      expect(machine.mappedRow).to.equal(0);
    });
  }),
  describe("pressButtonColumn", () => {
    it("should store a valid value", () => {
      machine.pressButtonColumn(1);
      expect(machine.chosenColumn).to.equal(1);
    });
    it("should map the value to an array index", () => {
      machine.pressButtonColumn(1);
      expect(machine.mappedColumn).to.equal(0);
    });
  }),
  describe("sell", () => {
    it("should sell the correct item", () => {
      machine.pressButtonRow("A");
      machine.pressButtonColumn(3);

      expect(machine.inventory[0][2].name).to.equal("soda");
    });
    it("should decrease the selected item's stock", () => {
      machine.insertCoin(500);
      machine.pressButtonRow("C");
      machine.pressButtonColumn(4);
      machine.sell();

      expect(machine.inventory[0][1].count).to.equal(3);
    });
    it("should return the correct amount of change", () => {
      machine.insertCoin(500);
      machine.insertCoin(100);
      machine.pressButtonRow("C");
      machine.pressButtonColumn(4);
      machine.sell();

      expect(machine.change).to.deep.equal({ 10: 0, 50: 1, 100: 0, 500: 1 });
    });
  });
