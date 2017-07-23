'use strict'

class Tokens {
  constructor (count = 1000, delay = 200) {
    if (isNaN(+count) || isNaN(+delay)) throw new Error('some parameters must be a number')
    this.initCount = count
    this.count = count
    this.delay = delay
    this.produce(delay)
  }

  /**
   * return cache date count
   * @param count
   * @returns {number}
   */
  consume (count) {
    return this.count < count ? count - this.count : 0
  }

  static produce (delay) {
    setInterval(() => {
      this.count = this.initCount
    }, delay)
  }
}

const createTokenBucket = (count, delay) => {

}


export {
  createTokenBucket
}