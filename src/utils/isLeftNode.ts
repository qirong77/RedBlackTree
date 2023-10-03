import { BSTNode } from "../BST/BSTNode";

export const isLeftNode = (node:BSTNode) => {
    if(!node.parent) throw new Error('无法找到父节点')
    return node.parent.left === node
}