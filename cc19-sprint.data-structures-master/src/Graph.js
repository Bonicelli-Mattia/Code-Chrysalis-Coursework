class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }
  addNode(value) {
    this.nodes[value] = [];
  }
  removeNode(value) {
    if (this.contains(value)) {
      const edges = this.nodes[value];
      for (let y of edges) {
        this.removeEdge(value, y);
      }
    }
    delete this.nodes[value];
  }
  contains(value) {
    return !!this.nodes[value];
  }
  addEdge(x, y) {
    if (this.contains(x) && this.contains(y)) {
      if (!this.nodes[x].includes(y)) {
        this.nodes[x].push(y);
        this.nodes[y].push(x);
      }
    } else {
      return "Invalid node value";
    }
  }
  removeEdge(x, y) {
    if (this.hasEdge(x, y)) {
      this.nodes[x].splice(this.nodes[x].indexOf(y), 1);
      this.nodes[y].splice(this.nodes[y].indexOf(x), 1);
    }
  }
  hasEdge(x, y) {
    if (this.contains(x) && this.contains(y)) {
      return this.nodes[x].includes(y);
    }
    return false;
  }
}
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Graph;
