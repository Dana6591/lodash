
import assert from 'assert';
import rightXorBy from '../rightXorBy.js';

describe('rightXorBy', function() {
  it('rightXorBy left Subtraction', function() {
    var list1 = [
      { name: 'alice', id: 18 },
      { name: 'alice2', id: 22 },
      { name: 'alice3', id: 19 },
    ];

    var list2 = [
      { name: 'alice', id: 19 },
      { name: 'alice', id: 22 },
      { name: 'alice', id: 18 },
      { name: 'alice', id: 25 },
      { name: 'alice', id: 43 },
    ];

    const actual = rightXorBy(list1, list2, obj => obj.id);

    const expect = [
      { name: 'alice', id: 25 },
      { name: 'alice', id: 43 },
    ];

    assert.deepStrictEqual(actual, expect);
  });
});
