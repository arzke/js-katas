class Tree {

  constructor(treeData) {
    this.treeData = treeData;
  }

  getLeaves(nodes) {
    nodes = nodes || this.treeData;

    return nodes.reduce((leaves, node) => {
      if(Tree.hasChildren(node)) {
        return leaves.concat(this.getLeaves(node.children));
      }

      leaves.push(node);
      return leaves;
    }, []);
  }

  static hasChildren(node) {
    return node.children && node.children.length > 0;
  }

}

export default Tree;