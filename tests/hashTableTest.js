import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable.js'

chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it ('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('hash()', () => {
    it('Hashes key into a numeric value for hashing.', () => {
      const myHashTable = new HashTable()
      console.log(myHashTable.hash('lemons'))
      expect(typeof(myHashTable.hash('lemons'))).to.equal('number')
      expect(myHashTable.hash('lemons')).to.equal(42)
    })
  })

  context('put()', () => {
    it('adds a key-value pair to the HashTable', () => {
      const myHashTable = new HashTable()
      myHashTable.put('one', 'cheese')
      expect(() => myHashTable.put('poop', 'crabs'))
        .to.alter(() => myHashTable.size(), { from: 1, to: 2 })
    })
  })

  context('get()', () => {
    it('returns value associated with the given key', () => {
      const myHashTable = new HashTable()
      expect(() => HashTable.get('nothing')).to.throw(Error)
      myHashTable.put('one', 'cheese')
      myHashTable.put('two', 'feet')
      myHashTable.put('three', 'lemonade')
      expect(myHashTable.get('three')).to.equal('lemonade')
      expect(myHashTable.get('two')).to.equal('feet')
    })
  })

  context('contains()', () => {
    it('returns true if HashTable contains the key, false otherwise', () => {
      const myHashTable = new HashTable()
      myHashTable.put('one', 'cheese')
      myHashTable.put('two', 'feet')
      myHashTable.put('three', 'lemonade')
      expect(myHashTable.get('nothing')).to.equal(false)
      expect(myHashTable.get('two')).to.equal(true)
    })
  })

  context('iterate()', () => {
    it('takes a callback function and passes it each key and value, in sequence', () => {
      const myHashTable = new HashTable()
      expect(() => HashTable.iterate((k, v) => console.log(k))).to.throw(Error)
      myHashTable.put('one', 'cheese')
      myHashTable.put('two', 'feet')
      myHashTable.put('three', 'lemonade')
      const newHashTable = new HashTable()
      myHashTable.iterate((k, v) => {
        let value = v + ' but new'
        NewHashTable.put(k, value)
      })
      expect(NewHashTable.get('one')).to.equal('cheese but new')
      expect(NewHashTable.get('two')).to.equal('feet but new')
    })
  })

  context('remove()', () => {
    it('removes a key-value pair bey key', () => {
      const myHashTable = new HashTable()
      expect( () => myHashTable.remove('nothing') ).to.throw(Error)
      myHashTable.put('one', 'cheese')
      myHashTable.put('two', 'feet')
      myHashTable.put('three', 'lemonade')
      expect(myHashTable.contains('one')).to.equal(true)
      myHashTable.remove('one')
      expect(myHashTable.contains('one')).to.equal(false)
    })
  })

  context('size()', () => {
    it('returns number of key-value pairs in HashTable', () => {
      const myHashTable = new HashTable()
      expect(myHashTable.size()).to.equal(0)
      // myHashTable.put('one', 'cheese')
      // myHashTable.put('two', 'feet')
      // myHashTable.put('three', 'lemonade')
      // expect(myHashTable.size()).to.equal(3)
    })
  })
})
