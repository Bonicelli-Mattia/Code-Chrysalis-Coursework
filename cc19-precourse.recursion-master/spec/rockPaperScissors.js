describe("Rock Paper Scissors", () => {
  it("should return the array containing 27 elements", () => {
    const actual = rockPaperScissors();

    expect(true).toEqual(Array.isArray(actual));
    expect(27).toEqual(actual.length);
  });

  it("should return the array containing 81 elements", () => {
    const actual = rockPaperScissors(4);

    expect(true).toEqual(Array.isArray(actual));
    expect(81).toEqual(actual.length);
  });

  it("should return the array containing 81 combinations in a four-round game", () => {
    const actual = rockPaperScissors(4);
    const expected = [
      ["rock", "rock", "rock", "rock"],
      ["rock", "rock", "rock", "paper"],
      ["rock", "rock", "rock", "scissors"],
      ["rock", "rock", "paper", "rock"],
      ["rock", "rock", "paper", "paper"],
      ["rock", "rock", "paper", "scissors"],
      ["rock", "rock", "scissors", "rock"],
      ["rock", "rock", "scissors", "paper"],
      ["rock", "rock", "scissors", "scissors"],
      ["rock", "paper", "rock", "rock"],
      ["rock", "paper", "rock", "paper"],
      ["rock", "paper", "rock", "scissors"],
      ["rock", "paper", "paper", "rock"],
      ["rock", "paper", "paper", "paper"],
      ["rock", "paper", "paper", "scissors"],
      ["rock", "paper", "scissors", "rock"],
      ["rock", "paper", "scissors", "paper"],
      ["rock", "paper", "scissors", "scissors"],
      ["rock", "scissors", "rock", "rock"],
      ["rock", "scissors", "rock", "paper"],
      ["rock", "scissors", "rock", "scissors"],
      ["rock", "scissors", "paper", "rock"],
      ["rock", "scissors", "paper", "paper"],
      ["rock", "scissors", "paper", "scissors"],
      ["rock", "scissors", "scissors", "rock"],
      ["rock", "scissors", "scissors", "paper"],
      ["rock", "scissors", "scissors", "scissors"],
      ["paper", "rock", "rock", "rock"],
      ["paper", "rock", "rock", "paper"],
      ["paper", "rock", "rock", "scissors"],
      ["paper", "rock", "paper", "rock"],
      ["paper", "rock", "paper", "paper"],
      ["paper", "rock", "paper", "scissors"],
      ["paper", "rock", "scissors", "rock"],
      ["paper", "rock", "scissors", "paper"],
      ["paper", "rock", "scissors", "scissors"],
      ["paper", "paper", "rock", "rock"],
      ["paper", "paper", "rock", "paper"],
      ["paper", "paper", "rock", "scissors"],
      ["paper", "paper", "paper", "rock"],
      ["paper", "paper", "paper", "paper"],
      ["paper", "paper", "paper", "scissors"],
      ["paper", "paper", "scissors", "rock"],
      ["paper", "paper", "scissors", "paper"],
      ["paper", "paper", "scissors", "scissors"],
      ["paper", "scissors", "rock", "rock"],
      ["paper", "scissors", "rock", "paper"],
      ["paper", "scissors", "rock", "scissors"],
      ["paper", "scissors", "paper", "rock"],
      ["paper", "scissors", "paper", "paper"],
      ["paper", "scissors", "paper", "scissors"],
      ["paper", "scissors", "scissors", "rock"],
      ["paper", "scissors", "scissors", "paper"],
      ["paper", "scissors", "scissors", "scissors"],
      ["scissors", "rock", "rock", "rock"],
      ["scissors", "rock", "rock", "paper"],
      ["scissors", "rock", "rock", "scissors"],
      ["scissors", "rock", "paper", "rock"],
      ["scissors", "rock", "paper", "paper"],
      ["scissors", "rock", "paper", "scissors"],
      ["scissors", "rock", "scissors", "rock"],
      ["scissors", "rock", "scissors", "paper"],
      ["scissors", "rock", "scissors", "scissors"],
      ["scissors", "paper", "rock", "rock"],
      ["scissors", "paper", "rock", "paper"],
      ["scissors", "paper", "rock", "scissors"],
      ["scissors", "paper", "paper", "rock"],
      ["scissors", "paper", "paper", "paper"],
      ["scissors", "paper", "paper", "scissors"],
      ["scissors", "paper", "scissors", "rock"],
      ["scissors", "paper", "scissors", "paper"],
      ["scissors", "paper", "scissors", "scissors"],
      ["scissors", "scissors", "rock", "rock"],
      ["scissors", "scissors", "rock", "paper"],
      ["scissors", "scissors", "rock", "scissors"],
      ["scissors", "scissors", "paper", "rock"],
      ["scissors", "scissors", "paper", "paper"],
      ["scissors", "scissors", "paper", "scissors"],
      ["scissors", "scissors", "scissors", "rock"],
      ["scissors", "scissors", "scissors", "paper"],
      ["scissors", "scissors", "scissors", "scissors"]
    ];

    expect(actual.sort()).toEqual(expected.sort());
  });
});
