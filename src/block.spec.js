const Block = require('./block');

describe('Genesis Block', () => {
  it('sets timestamp at instantiation', () => {
    const block = new Block();
    expect(block.timestamp).toBeGreaterThan(0);
  });

  it('sets index to zero', () => {
    const block = new Block();
    expect(block.index).toEqual(0);
  });

  it('sets previous hash to "-1"', () => {
    const block = new Block();
    expect(block.prevHash).toEqual('-1');
  });

  it('sets data to "GENESIS BLOCK"', () => {
    const block = new Block();
    expect(block.data).toEqual('GENESIS BLOCK');
  });

  it('sets hash', () => {
    const block = new Block();
    expect(block.hash).toBeDefined();
  });
});

describe('Block', () => {
  it('sets timestamp at instantiation', () => {
    const prevBlock = new Block();
    const block = new Block('data', prevBlock);
    expect(block.timestamp).toBeGreaterThan(0);
  });

  it('increments index from previous block', () => {
    const prevBlock = new Block();
    const block = new Block('data', prevBlock);
    expect(block.index).toEqual(prevBlock.index + 1);
  });

  it('sets previous hash', () => {
    const prevBlock = new Block();
    const block = new Block('data', prevBlock);
    expect(block.prevHash).toEqual(prevBlock.hash);
  });

  it('sets data', () => {
    const prevBlock = new Block();
    const block = new Block('data', prevBlock);
    expect(block.data).toEqual('data');
  });

  it('sets hash', () => {
    const prevBlock = new Block();
    const block = new Block('data', prevBlock);
    expect(block.hash).toBeDefined();
  });
});
