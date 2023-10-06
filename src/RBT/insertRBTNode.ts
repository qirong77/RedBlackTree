import { isLeftNode } from "../utils/isLeftNode";
import { NODE_COLOR, NilNode, RBTNode } from "./RBTNode";

export const insertRBTNode = (node: RBTNode, target: number) => {
  const newNode = insertBSTNode(node, target, undefined);


};

function insertBSTNode(
  node: RBTNode | undefined | NilNode,
  target: number,
  parent: RBTNode | undefined
): RBTNode {
  if (!node || node instanceof NilNode) {
    const newNode = new RBTNode(target);
    if (!parent) {
      console.log("插入根节点");
      node = newNode;
    } else {
      newNode.parent = parent;
      parent.value > target
        ? (parent.left = newNode)
        : (parent.right = newNode);
    }
    return newNode;
  }
  if (node.value > target) return insertBSTNode(node.left, target, node);
  else return insertBSTNode(node.right, target, node);
}

// 红黑树的平衡操作
function balanceInsertion(node:RBTNode) {
  // case1: 插入的节点是根节点
  if (!node.parent) {
    return node;
  }
  // case2: 父节点是黑色的,无需调整
  if (node.parent.color === "black") {
    return node;
  }
  // 以下case,父节点一定是红色
  // case3 : 父节点的兄弟节点为红色,就是爷节点的两个子节点都是红色
  if(node.parent.left.color === NODE_COLOR.RED && node.parent.right.color === NODE_COLOR.RED) {
    node.parent.left.color = NODE_COLOR.BLACK
    node.parent.right.color = NODE_COLOR.BLACK
    node.parent.color = NODE_COLOR.RED
    return
  } else {
    return
  }
  // case4 : 
}