class Tree {

  constructor(treeData) {
    this.treeData = treeData;
  }

  getLeaves() {
    return [this.treeData].reduce(function flattenChildren(leaves, child) {
      Tree.hasChildren(child) ? child.children.reduce(flattenChildren, leaves) : leaves.push(child);
      return leaves;
    }, []);
  }

  static hasChildren(node) {
    return node.hasOwnProperty('children') && node.children.length > 0;
  }

}

export default Tree;