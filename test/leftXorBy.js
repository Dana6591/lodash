import assert from 'assert';
import leftXorBy from '../leftXorBy.js';

describe('leftXorBy', function() {
  it('leftXorBy left Subtraction', function() {
    var list1 = [
      { name: 'alice', id: 18 },
      { name: 'alice2', id: 22 },
      { name: 'alice3', id: 19 },
    ];

    var list2 = [
      { name: 'alice', id: 19 },
      { name: 'alice', id: 22 },
    ];

    const actual = leftXorBy(list1, list2, obj => obj.id);

    const expect = [
      { name: 'alice', id: 18 },
    ];

    assert.deepStrictEqual(actual, expect);
  });
});
