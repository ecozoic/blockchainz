const Chain = require('./chain');

describe('Chain', () => {
  it('creates genesis block on instantiation', () => {
    const chain = new Chain();

    expect(chain.blocks).toHaveLength(1);
    expect(chain.tail).toBe(chain.blocks[0]);
    expect(chain.head).toBe(chain.blocks[0]);
    expect(chain.head.index).toEqual(0);
  });

  it('adds new data block to the chain', () => {
    const chain = new Chain();
    chain.add('data');

    expect(chain.blocks).toHaveLength(2);
    expect(chain.head).toBe(chain.blocks[0]);
    expect(chain.tail).toBe(chain.blocks[1]);
    expect(chain.tail.data).toEqual('data');
    expect(chain.head.hash).toEqual(chain.tail.prevHash);
    expect(chain.tail.index).toEqual(1);
  });
});
