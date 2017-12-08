const Block = require('./block');

class Chain {
  constructor() {
    this.blocks = [new Block()];
  }

  get head() {
    return this.blocks[0];
  }

  get tail() {
    return this.blocks[this.length - 1];
  }

  get length() {
    return this.blocks.length;
  }

  add(data) {
    this.blocks.push(new Block(data, this.tail));
  }
}

module.exports = Chain;
