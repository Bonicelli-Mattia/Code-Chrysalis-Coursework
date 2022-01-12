const { expect } = require("chai");
const _ = require("underscore");
const HashMap = require("../src/HashMap");
let { hash } = require("../src/hash");

let hashMap;

describe("hashMap", () => {
  beforeEach(() => {
    hashMap = new HashMap();
  });

  it("should have methods named set, get, and getIndex", () => {
    expect(hashMap.set).to.be.a("function");
    expect(hashMap.get).to.be.a("function");
    expect(hashMap.getIndex).to.be.a("function");
  });

  it("should store values that were inserted", () => {
    hashMap.set("Banana", "Watermelon");
    expect(hashMap.get("Banana")).to.equal("Watermelon");
  });

  it("should not contain values that were not inserted", () => {
    hashMap.set("Banana", "Strawberry");
    expect(hashMap.get("Banana")).not.to.equal("Watermelon");
  });

  it("should handle hash function collisions", () => {
    const v1 = "val1";
    const v2 = "val2";
    const oldHashFunction = hash;
    hash = () => 0;
    hashMap.set(v1, v1);
    hashMap.set(v2, v2);
    expect(hashMap.get(v1)).to.equal(v1);
    expect(hashMap.get(v2)).to.equal(v2);
    hash = oldHashFunction;
  });
});