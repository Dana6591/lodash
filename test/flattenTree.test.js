import assert from 'assert';
import flattenTree from '../flattenTree'

describe('flattenTree', function() {
  it('should flattenTree', function() {
    const data = [
      {
        value: 'xxx',
        children: [
          {
            value: 'xxx--1',
            children: [
              {
                value: 'xxx--1--1',
              },
            ],
          },
          {
            value: 'xxx--2',
            children: [],
          }
        ],
      },
      {
        value: 'yyy',
        children: [],
      },
      {
        value: 'zzz',
        children: [
          {
            value: 'zzz-001',
            children: [],
          },
        ],
      },
    ];

    const actual = flattenTree(data);

    assert.deepStrictEqual(actual[0].level, 1);
    assert.deepStrictEqual(actual[1].level, 2);
    assert.deepStrictEqual(actual[2].level, 3);
    assert.deepStrictEqual(actual[3].level, 2);
    assert.deepStrictEqual(actual[4].level, 1);
  });
});
