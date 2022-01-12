const expect = chai.expect;

describe("Queues - ES6 Classes", () => {
  describe("The Queue Class", () => {
    it("should use ES6 classes", () => {
      let error = false;
      try {
        Queue();
      } catch (e) {
        error = true;
      }
      expect(error).to.be.true;
    });

    it("should en- and dequeue any kind of value properly", () => {
      const q = new Queue();
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
  });

  describe("The Queue constructor", () => {
    it("should be a function", () => {
      expect(Queue).to.be.a("function");
    });

    it("should return an object", () => {
      const queue = new Queue();
      expect(queue).to.be.a("object");
    });
  });

  describe("The enqueue method", () => {
    it("should be a function", () => {
      const queue = new Queue();
      expect(queue.enqueue).to.be.a("function");
    });
  });

  describe("The dequeue method", () => {
    it("should be a function", () => {
      const queue = new Queue();
      expect(queue.dequeue).to.be.a("function");
    });

    it("should handle an empty queue", () => {
      const queue = new Queue();
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.length()).to.equal(0);
      expect(queue.dequeue()).to.equal(undefined);
    });
  });

  describe("The length method", () => {
    it("should be a function", () => {
      const queue = new Queue();
      expect(queue.length).to.be.a("function");
    });

    it("should calculate the length of the queue", () => {
      const queue = new Queue();
      queue.enqueue("a");
      expect(queue.length()).to.equal(1);
      queue.enqueue("a");
      expect(queue.length()).to.equal(2);
      queue.enqueue("a");
      expect(queue.length()).to.equal(3);
      queue.dequeue();
      expect(queue.length()).to.equal(2);
    });
  });
});

describe("Stacks - ES6 Classes", () => {
  describe("The Stack Class", () => {
    it("should use ES6 classes", () => {
      let error = false;
      try {
        Stack();
      } catch (e) {
        error = true;
      }
      expect(error).to.be.true;
    });

    it("should push and pop any kind of value properly", () => {
      const s = new Stack();
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
  });

  describe("The Stack constructor", () => {
    it("should be a function", () => {
      expect(Stack).to.be.a("function");
    });

    it("should return an object", () => {
      const stack = new Stack();
      expect(stack).to.be.a("object");
    });
  });

  describe("The push method", () => {
    it("should be a function", () => {
      const stack = new Stack();
      expect(stack.push).to.be.a("function");
    });
  });

  describe("The pop method", () => {
    it("should be a function", () => {
      const stack = new Stack();
      expect(stack.pop).to.be.a("function");
    });

    it("should handle an empty stack", () => {
      const stack = new Stack();
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.length()).to.equal(0);
      expect(stack.pop()).to.equal(undefined);
    });
  });

  describe("The length method", () => {
    it("should be a function", () => {
      const stack = new Stack();
      expect(stack.length).to.be.a("function");
    });

    it("should calculate the length", () => {
      const stack = new Stack();
      expect(stack.length()).to.equal(0);
      stack.push(2);
      expect(stack.length()).to.equal(1);
      stack.push(2);
      expect(stack.length()).to.equal(2);
      stack.push(2);
      expect(stack.length()).to.equal(3);
      stack.pop();
      expect(stack.length()).to.equal(2);
    });
  });
});
