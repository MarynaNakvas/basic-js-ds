const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = new Node(data);
  
    if (!this.treeRoot) {
      this.treeRoot = node;
      return this;
    }

    let current = this.treeRoot;

    while (true) {
      if (data === current.data) {
        return;
      }

      if (data < current.data) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this.treeRoot;

    while (current) {
      if (data === current.data) {
        return true;
      }
      current = data < current.data ? current.left : current.right;
    }
    return false;
  }

  find(data) {
    let current = this.treeRoot;

    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  remove(data) {
    const removeNode = (node, value) => {
      if (node === null) {
        return null;
      } else if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        } else if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
  
        let maxLeft = node.left;
  
        while (maxLeft.right) {
          maxLeft = maxLeft.right
        }
    
        node.data = maxLeft.data;
        node.left = removeNode(node.left, maxLeft.data);
  
        return node;
      }
    }

    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    let current = this.treeRoot;

    while (current) {
      if (current && current.left) {
        current = current.left;
      } else {
        return current.data
      }
    }
    return null;
  }

  max() {
    let current = this.treeRoot;

    while (current) {
      if (current && current.right) {
        current = current.right;
      } else {
        return current.data
      }
    }
    return null;
  }
}

module.exports = {
  BinarySearchTree
};