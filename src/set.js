'use strict'

export default class Set {
  constructor(set) {
    this.set = set
  }

  add(data) {
    this.set[this.set.length] = data
  }
  isEmpty() {
    return this.set.length === 0 ? true : false
  }
  contains(data) {
    if (this.set.indexOf(data) === -1){
      return false
    }
    return true
  }
  remove(data) {
    let indexOfData = this.set.indexOf(data)
    if (this.contains(data)) {
      this.set.splice(indexOfData, 1)
    }
  }
  forEach(func){
    for (let i of this.set) {
      func(i)
    }
  }

  size() {
    return this.set.length
  }
  // union()
  // intersect()
  // difference()
  // isSublet()
  // clone()
}