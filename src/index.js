const Chain = require('./chain');

const chain = new Chain();
chain.add('foo');
chain.add('bar');
chain.add('baz');

console.log(chain);
