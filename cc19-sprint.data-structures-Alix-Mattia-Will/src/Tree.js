class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }

  contains(value) {
    if (value === this.value) return true;
    for (let child of this.children) {
      if (child.contains(value)) return true;
    }
    return false;
  }

  remove(value) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) {
        const killChild = this.children[i];
        this.children.splice(i, 1);
        return killChild;
      }
    }
    for (let i = 0; i < this.children.length; i++) {
      const removedNode = this.children[i].remove(value);
      if (removedNode) return removedNode;
    }
  }
  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  // traverseDepthFirst(fn) {}

  // traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Tree;
