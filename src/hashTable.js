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
    const hashedKey = this.hash( key )
    this.hashTable[hashedKey] = { 'key': key, 'value':value }
    this.count++
  }

  get( key ) {
    const hashedKey = this.hash( key )
    const value = this.hashTable[hashedKey].value
    if( value == undefined ) {
      throw new Error('Key does not exist')
    }
    return value
  }

  contains( key )  {
    const hashedKey = this.hash( key )
    const value = this.hashTable[hashedKey]
    return Boolean(value)
  }

  iterate( func ) {
    if(this.size < 1){
      throw new Error('Can not iterate on an empty HashTable')
    }
    for(let pair of this.hashTable) {
      if(!pair) {continue}
      console.log('IN FOR OF--->', this.hashTable);
      console.log('IN FOR OF--->', pair);
      func( pair.key, pair.value )
    }
  }

  remove( key ) {
    const hashedKey = this.hash( key )
    const value = this.hashTable[hashedKey].value
    if( value == undefined ) {
      throw new Error('Attempting to remove a key that does not exist')
    }
    delete this.hashTable[hashedKey]
  }

  size() {
    return this.count
  }

}
