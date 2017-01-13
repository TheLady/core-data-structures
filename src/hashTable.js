export default class HashTable {
  constructor() {
    this.hashTable = []
    this.count = 0
  }

  hash( key ) {
    let sum = 0;
    const randomH = 31
    const prime = 51
    key = key.toString();
    for (let i = 0; i < key.length; i++) {
        sum = (randomH * sum) + key.charCodeAt(i)
    }
    return sum % prime // return hashingIndex
  }

  put( key, value ) {
    let hashedKey = this.hash( key )
    console.log("Key--> ", key, 'HKey-->', hashedKey, 'value-->', value);
    this.hashTable[hashedKey] = value
    this.count++
  }

  get( key ) {
    let hashedKey = this.hash( key )
    let value = this.hashTable[hashedKey]
    console.log("Key--> ", key, 'HKey-->', hashedKey, 'value-->', value)
    if( value == undefined ) {
      throw new Error('Key does not exist')
    }
    return value

  }

  size() {
    return this.count
  }

}
