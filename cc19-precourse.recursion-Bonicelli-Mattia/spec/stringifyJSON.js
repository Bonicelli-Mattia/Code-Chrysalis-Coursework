const stringifiableValues = [
  100000,
  true,
  false,
  null,
  "Code Chrysalis",
  [],
  [10000],
  ["yan"],
  [10000, "kani"],
  [1, 2, 1000, 0, -1, -3, -3.14, 3.14, 0.1099999, 1000.9999],
  [[[["rachel"]]]],
  [10000, [[1, 2, 3, 4], 5, 8]],
  {},
  { a: "is for apple" },
  { foo: true, bar: false, baz: null },
  { "boolean, true": true, "boolean, false": false, null: null },
  // basic nesting
  { a: { b: "c" } },
  { a: ["b", "c"] },
  [{ a: "b" }, { c: "d" }],
  { a: [], c: {}, b: true }
];

const unstringifiableValues = [
  {
    functions: function() {},
    undefined: undefined
  }
];

describe("stringifyJSON", function() {
  function testStringify(valueToTest, index) {
    it("should parse some objects " + index, () => {
      const result = stringifyJSON(valueToTest);
      const expected = JSON.stringify(valueToTest);
      expect(result).toEqual(expected);
    });
  }

  for (let i = 0; i < stringifiableValues.length; i++) {
    testStringify(stringifiableValues[i], i);
  }

  function testUnstringifiable(valueToTest, index) {
    it("should not be able to parse bad values", () => {
      const result = stringifyJSON(valueToTest);
      const expected = JSON.stringify(valueToTest);
      expect(result).toEqual(expected);
    });
  }

  for (let i = 0; i < unstringifiableValues.length; i++) {
    testUnstringifiable(unstringifiableValues[i], i);
  }
});
