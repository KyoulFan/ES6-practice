/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;
    function sumCount(node) {
      for (let child of node.children) {
        total += child.val;
        //use recursion to traversing
        if (child.children.length > 0) {
          sumCount(child);
        }
      }
    }

    sumCount(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let evenNum = this.root.val % 2 === 0 ? 1 : 0;
    function evenFind(node) {
      for (let child of children) {
        {
          if (child.val % 2 === 0) {
            evenNum++;
          }
          if (child.children.length > 0) {
            evenFind(child);
          }
        }
      }
    }
    evenFind(this.root);
    return evenNum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let countGreater = this.root.val > lowerBound ? 1 : 0;
    function findGreater() {
      for (let child of children) {
        if (child > lowerBound) {
          countGreater++;
        }
        if (child.children.length > 0) {
          findGreater(child);
        }
      }
    }
    findGreater(this.root);
    return countGreater;
  }
}

module.exports = { Tree, TreeNode };
