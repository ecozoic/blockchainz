const crypto = require('crypto');

class Block {
  constructor(data = null, prevBlock = null) {
    this.timestamp = new Date().getTime();

    if (prevBlock) {
      this.data = data;
      this.index = prevBlock.index + 1;
      this.prevHash = prevBlock.hash;
    } else {
      this.data = 'GENESIS BLOCK';
      this.index = 0;
      this.prevHash = '-1';
    }

    this.hash = crypto
      .createHash('sha256')
      .update(this.timestamp + this.data + this.index + this.prevHash)
      .digest('hex');
  }
}

module.exports = Block;
