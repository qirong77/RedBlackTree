import { BSTNode } from "../BST/BSTNode";

export const checkBSTBalance = (node: BSTNode | undefined) => {
  if (!node) return;
  if (node.left && node.right) {
    if (node.left.value > node.value || node.value > node.right.value || node.left.value > node.right.value) {
      throw new Error("不平衡");
    }
  }
  checkBSTBalance(node.left);
  checkBSTBalance(node.right);
};
