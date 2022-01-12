const expect = chai.expect;

describe("Queues - Pseudoclassical", () => {
  let instance = {};
  beforeEach(() => {
    instance = new Queue();
    instance.enqueue("a");
    instance.enqueue("b");
    instance.enqueue("c");
  });

  it("should en- and dequeue any kind of value properly", () => {
    let q = new Queue();
    q.enqueue("a");
    q.enqueue(2);
    q.enqueue(new Queue());
    q.enqueue(new Set());
    q.enqueue(false);
    q.enqueue(true);
    q.enqueue(undefined);
    q.enqueue(null);
    q.enqueue(NaN);

    expect(q.dequeue()).to.equal("a");
    expect(q.dequeue()).to.equal(2);
    expect(q.dequeue()).to.be.instanceof(Queue);
    expect(q.dequeue()).to.be.instanceof(Set);
    expect(q.dequeue()).to.be.false;
    expect(q.dequeue()).to.be.true;
    expect(q.dequeue()).to.be.undefined;
    expect(q.dequeue()).to.be.null;
    expect(q.dequeue()).to.be.NaN;
  });

  describe("The Queue constructor", () => {
    it("should be a function", () => {
      expect(Queue).to.be.a("function");
    });

    it("should return an object", () => {
      let instance = new Queue();
      expect(instance).to.be.a("object");
    });

    it("should return an instance of itself", () => {
      expect(instance).to.be.an.instanceof(Queue);
    });
  });

  describe("The enqueue method", () => {
    it("should be a function", () => {
      expect(Queue.prototype.enqueue).to.be.a("function");
    });

    it("should be on the prototype chain", () => {
      expect(Queue.prototype).to.have.property("enqueue");
    });
  });

  describe("The dequeue method", () => {
    it("should be a function", () => {
      expect(Queue.prototype.dequeue).to.be.a("function");
    });

    it("should remove the first value", () => {
      expect(instance.dequeue()).to.equal("a");
    });

    it("should remove multiple values in order", () => {
      expect(instance.dequeue()).to.equal("a");
      expect(instance.dequeue()).to.equal("b");
    });

    it("should handle an empty queue", () => {
      instance.dequeue();
      instance.dequeue();
      instance.dequeue();
      instance.dequeue();
      expect(instance.length()).to.equal(0);
      expect(instance.dequeue()).to.equal(undefined);
    });

    it("should be on the prototype chain", () => {
      expect(Queue.prototype).to.have.property("dequeue");
    });
  });

  describe("The length method", () => {
    it("should be a function", () => {
      expect(Queue.prototype.length).to.be.a("function");
    });

    it("should calculate the length", () => {
      expect(instance.length()).to.equal(3);
    });

    it("should decrement the length after a dequeue", () => {
      instance.dequeue();
      expect(instance.length()).to.equal(2);
    });

    it("should be on the prototype chain", () => {
      expect(Queue.prototype).to.have.property("length");
    });
  });
});

describe("Stacks - Pseudoclassical", () => {
  let instance = {};

  beforeEach(() => {
    instance = new Stack();
    instance.push("a");
    instance.push("b");
    instance.push("c");
  });

  it("should push and pop any kind of value properly", () => {
    let s = new Stack();
    s.push("a");
    s.push(2);
    s.push(new Queue());
    s.push(new Set());
    s.push(false);
    s.push(true);
    s.push(undefined);
    s.push(null);
    s.push(NaN);

    expect(s.pop()).to.be.NaN;
    expect(s.pop()).to.be.null;
    expect(s.pop()).to.be.undefined;
    expect(s.pop()).to.be.true;
    expect(s.pop()).to.be.false;
    expect(s.pop()).to.be.instanceof(Set);
    expect(s.pop()).to.be.instanceof(Queue);
    expect(s.pop()).to.equal(2);
    expect(s.pop()).to.equal("a");
  });

  describe("The Stack constructor", () => {
    it("should be a function", () => {
      expect(Stack).to.be.a("function");
    });

    it("should return an object", () => {
      let instance = new Stack();
      expect(instance).to.be.a("object");
    });

    it("should return an instance of itself", () => {
      expect(instance).to.be.an.instanceof(Stack);
    });
  });

  describe("The push method", () => {
    it("should be a function", () => {
      expect(Stack.prototype.push).to.be.a("function");
    });

    it("should be on the prototype chain", () => {
      expect(Stack.prototype).to.have.property("push");
    });
  });

  describe("The pop method", () => {
    it("should be a function", () => {
      expect(Stack.prototype.pop).to.be.a("function");
    });

    it("should remove the last value", () => {
      expect(instance.pop()).to.equal("c");
    });

    it("should remove multiple values in order", () => {
      expect(instance.pop()).to.equal("c");
      expect(instance.pop()).to.equal("b");
    });

    it("should handle an empty stack", () => {
      instance.pop();
      instance.pop();
      instance.pop();
      instance.pop();
      expect(instance.length()).to.equal(0);
      expect(instance.pop()).to.equal(undefined);
    });

    it("should be on the prototype chain", () => {
      expect(Stack.prototype).to.have.property("pop");
    });
  });

  describe("The length method", () => {
    it("should be a function", () => {
      expect(Stack.prototype.length).to.be.a("function");
    });

    it("should calculate the length", () => {
      expect(instance.length()).to.equal(3);
    });

    it("should decrement the length after a pop", () => {
      instance.pop();
      expect(instance.length()).to.equal(2);
    });

    it("should be on the prototype chain", () => {
      expect(Stack.prototype).to.have.property("length");
    });
  });
});
