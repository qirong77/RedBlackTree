import { NilNode, RBTNode } from "./RBTNode";

export const checkPath = (node: RBTNode) => {
  const paths: (RBTNode | NilNode)[][] = [];
  function dfs(node: RBTNode | NilNode, path: (RBTNode | NilNode)[] = []) {
    if (node instanceof NilNode) {
      paths.push(path);
      return;
    }
  }
};
