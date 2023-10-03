import { BSTNode } from "../BST/BSTNode";
import { cloneDeep } from "lodash-es";
export const toTree = (node: BSTNode | undefined) => {
  return toFullBinaryTree(cloneDeep(node));
};

function toFullBinaryTree(
  node: BSTNode | undefined,
  depth = 0,
  results = [] as (BSTNode | null)[][]
) {
  if(depth > 8) return
  if (node) {
    if (results[depth]) results[depth].push(node);
    else results[depth] = [node];
  } else {
    if (results[depth]) results[depth].push(null);
    else results[depth] = [null];
  }
  toFullBinaryTree(node?.left, depth + 1, results);
  toFullBinaryTree(node?.right, depth + 1, results);
  return results;
}
