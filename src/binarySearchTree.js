import Node from './node'

export default class BinarySearchTree {
  constructor() {
    this.root = null
    this.nodeCount = 0
  }
  insert(data){
    const newNode = new Node(data)
    let injectionRoot = null
    if(this.nodeCount == 0){
      this.root = newNode
    } else {
      injectionRoot = this.findLeaf(data)
      if(injectionRoot.data > newNode.data){
        injectionRoot.left = newNode
      } else {
        injectionRoot.right = newNode
      }
    }
    this.nodeCount++;
  }

  search(data){

  }

  // remove(data){
  //
  // }

  traverse(order, func){
    switch(order){
      case 'inOrder':
      console.log(func);
        this.inOrder(this.root, func)
        break
      case 'postOrder':
        this.postOrder(this.root, func)
        break
      case 'preOrder':
        this.preOrder(this.root, func)
        break
    }
  }

  count(){

  }

  inOrder(subTreeNode, func){
    console.log(func);
    let returnedVal = null
    if(subTreeNode){
      this.inOrder(subTreeNode.left, func)
      returnedVal = func(subTreeNode.data)
      this.inOrder(subTreeNode.right, func)
      return returnedVal
    }
  }

  postOrder(subTreeNode, func){
    let returnedVal = null
    if(subTreeNode) {
      this.postOrder(subTreeNode.left, func)
      this.postOrder(subTreeNode.right, func)
      returnedVal = func(subTreeNode.data)
      return returnedVal
    }
  }

  preOrder(subTreeNode, func){
    let returnedVal = null
    if(subTreeNode) {
      returnedVal = func(subTreeNode.data)
      this.preOrder(subTreeNode.left, func)
      this.preOrder(subTreeNode.right, func)
      return returnedVal
    }
  }

  findLeaf(data){
    let cursorNode = this.root
    let prevNode = null
    while(cursorNode != null){
      if (data > cursorNode.data) {
        prevNode = cursorNode
        cursorNode = cursorNode.right
      } else {
        prevNode = cursorNode
        cursorNode = cursorNode.left
      }
    }
    return prevNode
  }
}
