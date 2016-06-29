import Tree from './tree/tree'
import treeData from './tree/treeData'

let tree = new Tree(treeData);
console.log(tree.getLeaves());