class Tree {

  constructor(treeData) {
    this.treeData = treeData;
  }

  getLeaves(nodes) {
    nodes = nodes || this.treeData;

    return nodes.reduce((leaves, node) => {
      if(node.children && node.children.length > 0) {
        return leaves.concat(this.getLeaves(node.children));
      }

      leaves.push(node);
      return leaves;
    }, []);
  }

}

export default Tree;