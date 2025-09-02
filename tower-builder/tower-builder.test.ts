import { assert } from 'chai';
import { towerBuilder } from './index';

describe("towerBuilder", () => {
  it("Basic Test", () => {
    assert.deepEqual(towerBuilder(1), ["*"]);
    assert.deepEqual(towerBuilder(2), [" * ","***"]);
    assert.deepEqual(towerBuilder(3), ["  *  "," *** ","*****"]);
  })
});