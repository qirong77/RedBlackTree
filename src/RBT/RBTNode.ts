export enum NODE_COLOR {
  BLACK = "black",
  RED = "red",
}
export class RBTNode {
  public color: NODE_COLOR = NODE_COLOR.BLACK;
  public parent: RBTNode | undefined;
  public left: RBTNode | NilNode = new NilNode(this);
  public right: RBTNode | NilNode = new NilNode(this);
  public value: number;
  constructor(value: number) {
    this.value = value;
  }
  public isNilNode():false {
    return false;
  }
}

export class NilNode {
  public color = NODE_COLOR.BLACK;
  public parent: undefined | RBTNode;
  public isNilNode():true {
    return true;
  }
  constructor(parent:RBTNode) {
    this.parent = parent
  }
}
