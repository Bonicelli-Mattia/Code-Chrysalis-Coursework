describe("gameGenerator", () => {
  it("should be there", () => {
    expect(gameGenerator).toBeDefined();
    expect(typeof gameGenerator).toBe("function");
  });

  it("should generate some games!", () => {
    const game = gameGenerator(4);
    expect(typeof game).toBe("object");
  });

  it("should have just one winning number", () => {
    const bound = 4;
    const game = gameGenerator(bound);
    const number = [];
    for (let i = 0; i <= bound; i++) {
      if (game.guess(i)) {
        number.push(i);
      }
    }
    expect(number.length).toBe(1);
  });

describe("reset function", () => {
  it("should be there", () => {
    const game = gameGenerator();
    expect(game.reset).toBeDefined();
    expect(typeof game.reset).toBe("function");
  });

  it("should generate a new number everytime", () => {
    const game = gameGenerator(5);
    let previous = game.getWinner();
    game.reset();
    let current = game.getWinner();
    let count = 0;
    while (previous === current && count <= 50) {
      count++
      game.reset()
      current = game.getWinner()
    };
    expect(previous).not.toBe(current);
  });

  it("should reset the number of guesses", () => {
    const game = gameGenerator(4);
    game.guess(3)
    let previous = game.numberGuesses();
    game.reset();
    let current = game.numberGuesses();
    expect(previous).not.toBe(current);
  });

  it("should have the same upper bound", () => {
    const game = gameGenerator(4);
    let previous = game.getLimit();
    game.reset();
    let current = game.getLimit();
    expect(previous).toBe(current);
  });
});

describe("giveUp function", () => {
  
  it("should have a numberGuesses method", () => {
    const game = gameGenerator();
    expect(game.numberGuesses).toBeDefined();
    expect(typeof game.numberGuesses).toBe("function");
  });

  it("should return the winning number", () => {
    const game = gameGenerator(4);
    let expected = game.getWinner();
    let actual = game.giveUp();
    expect(expected).toBe(actual);
  });
    
  it("should reset the game", () => {
    const game = gameGenerator(3);
    spyOn(game, "reset");
    game.giveUp();
    expect(game.reset).toHaveBeenCalled();
  });
});

describe("guess function", () => {
  
  it("should exist", () => {
    const game = gameGenerator(3);
    expect(game.guess).toBeDefined();
    expect(typeof game.guess).toBe("function");
  });

  it("should return true if the guess is right", () => {
    const game = gameGenerator(0);
    game.guess(0)
    expect(game.guess(0)).toBeTruthy();
  });
    
  it("should return false if the guess is wrong", () => {
    const game = gameGenerator(3);
    expect(game.guess(99)).toBeFalsy();
  });

  it("should keep track of how many guesses have been made", () => {
    const game = gameGenerator(3);
    game.guess(1);
    game.guess(2);
    game.guess(3);
    expect(game.numberGuesses()).toBe(3);
  });
});

describe("numberGuesses function", () => {

  it("should have a numberGuesses method", () => {
    const game = gameGenerator(3);
    expect(game.numberGuesses).toBeDefined();
    expect(typeof game.numberGuesses).toBe("function");
  });

  it("should show the current number of guesses", () => {
    const game = gameGenerator(3);
    console.log = jasmine.createSpy("log");
    game.guess(88);
    game.numberGuesses();
    let spied = game.numberGuesses()
    expect(console.log).toHaveBeenCalledWith(spied);
    expect(game.numberGuesses()).toBe((1))
  });
});
});


describe("accountGenerator", () => {

  it("should be there", () => {
    expect(accountGenerator).toBeDefined();
    expect(typeof accountGenerator).toBe("function");
  });

describe("getBalance", () => {

  it("should have a getBalance method", () => {
    const account = accountGenerator(1000)
    expect(account.getBalance).toBeDefined();
    expect(typeof account.getBalance).toBe("function");
  });

  it("should return the current balance", () => {
    const account = accountGenerator(1000)
    account.deposit(500)
    account.withdraw(250)
    expect(account.getBalance()).toBe(1250);
  });
})

describe("withdraw", () => {
  it("should return an object", () => {
    const account = accountGenerator(1000)
    expect(typeof account.withdraw()).toBe("object");
  });
});

describe("deposit", () => {
  it("should return an object", () => {
    const account = accountGenerator(1000)
    expect(typeof account.deposit()).toBe("object");
  });

  describe("transactionHistory", () => {
    it("should exist", () => {
      const account = accountGenerator(1000)
      expect(account.transactionHistory).toBeDefined();
      expect(typeof account.transactionHistory).toBe("function");
    });

    it("should return the last n transactions", () => {
      const account = accountGenerator(1000)
      account.deposit(111)
      account.withdraw(211)
      account.deposit(123)
      account.deposit(132)
      account.withdraw(454)
      account.deposit(8416)
      account.deposit(23)
      expect(account.transactionHistory(3).length).toBe(3)
    });
  });

  describe("averageTransaction", () => {

    it("should be there", () => {
      const account = accountGenerator(1000)
      expect(account.averageTransaction).toBeDefined();
      expect(typeof account.averageTransaction).toBe("function");
    });
    
    it("should return the average of all transactions", () => {
      const account = accountGenerator(1000)
      account.deposit(20)
      account.withdraw(12345)
      account.withdraw(200)
      account.deposit(50)
      account.deposit(50)
      account.withdraw(400)
      expect(account.averageTransaction().deposit).toBe(40);
      expect(account.averageTransaction().withdrawal).toBe(300);
    });
})
})
})