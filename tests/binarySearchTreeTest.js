import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree.js'

chai.use(chaiChange)

describe('BinarySearchTree', () => {
  'use strict'

  it ('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert()', () => {
    it('Inserts a node with the specified value into the tree', () => {
      const myBinarySearchTree = new BinarySearchTree()
      myBinarySearchTree.insert(15)
      myBinarySearchTree.insert(33)
      myBinarySearchTree.insert(11)
      myBinarySearchTree.insert(24)
      expect(myBinarySearchTree.count()).to.equal(4)
      expect(myBinarySearchTree.search(15).left.data).to.equal(11)
      expect(myBinarySearchTree.search(33).left.data).to.equal(24)
      expect(() => myBinarySearchTree.insert(33)).to.throw(Error)
    })
  })

  context('search()', () => {
    it('returns a node object or null if not found', () => {
      const myBinarySearchTree = new BinarySearchTree()
      myBinarySearchTree.insert(15)
      myBinarySearchTree.insert(33)
      myBinarySearchTree.insert(11)
      myBinarySearchTree.insert(24)
      expect(myBinarySearchTree.search(15).data).to.equal(15)
      expect(myBinarySearchTree.search(15).left.data).to.equal(11)
      expect(myBinarySearchTree.search(15).right.data).to.equal(33)
      expect(myBinarySearchTree.search(12)).to.equal(null)
    })
  })

  // context('remove()', () => {
  //   it('removes an value\'s node (if exists) from the tree', () => {
  //     const myBinarySearchTree = new BinarySearchTree()
  //     myBinarySearchTree.insert(15)
  //     myBinarySearchTree.insert(33)
  //     myBinarySearchTree.insert(11)
  //     myBinarySearchTree.insert(24)
  //     expect(myBinarySearchTree.search(15).data).to.equal(15)
  //     expect(myBinarySearchTree.search(15).left.data).to.equal(11)
  //     expect(myBinarySearchTree.search(15).right.data).to.equal(33)
  //     expect(myBinarySearchTree.search(12)).to.equal(null)
  //   })
  // })

  context('traverse()', () => {
    it('traverse the tree in the defined order (preOrder, inOrder, postOrder) and apply function on each node\'s value', () => {
      const myBinarySearchTree = new BinarySearchTree()
      myBinarySearchTree.insert(15)
      myBinarySearchTree.insert(33)
      myBinarySearchTree.insert(11)
      myBinarySearchTree.insert(24)
      let inOrderArray = []
      let postOrderArray = []
      let preOrderArray = []
      myBinarySearchTree.traverse('inOrder', (val) => {
        console.log(val)
      })
      myBinarySearchTree.traverse('inOrder', (val) => {
        inOrderArray.push(val)
      })
      myBinarySearchTree.traverse('postOrder', (val) => {
        postOrderArray.push(val)
      })
      myBinarySearchTree.traverse('preOrder', (val) => {
        preOrderArray.push(val)
      })
      expect(inOrderArray).to.deep.equal([11,15,24,33])
      expect(preOrderArray).to.deep.equal([15,11,33,24])
      expect(postOrderArray).to.deep.equal([11,24,33,15])

    })
  })

  context('count()', () => {
    it('return the number of nodes in the tree', () => {
      const myBinarySearchTree = new BinarySearchTree()
      myBinarySearchTree.insert(15)
      myBinarySearchTree.insert(33)
      myBinarySearchTree.insert(11)
      myBinarySearchTree.insert(24)
      expect(myBinarySearchTree.right.count()).to.equal(2)
      expect(myBinarySearchTree.left.count()).to.equal(1)
      expect(myBinarySearchTree.count()).to.equal(4)
    })
  })

})
