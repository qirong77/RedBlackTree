import { BSTNode } from "./BSTNode";

export const inserBSTNode = (
  node: BSTNode | undefined,
  target: number,
  parent: BSTNode | undefined
) => {
  if (!node) {
    const newNode = new BSTNode(target);
    if (!parent) {
      console.log("插入根节点");
      node = newNode;
    } else {
      newNode.parent = parent
      parent.value > target
        ? (parent.left = newNode)
        : (parent.right = newNode);
    }
    return;
  }
  if (node.value > target) inserBSTNode(node.left, target, node);
  else inserBSTNode(node.right, target, node);
};
