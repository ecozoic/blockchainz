const Block = require('./block');

const genesisBlock = new Block();
const block = new Block('hey', genesisBlock);

console.log(genesisBlock);
console.log(block);
