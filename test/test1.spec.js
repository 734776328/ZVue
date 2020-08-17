var expect = require('chai').expect;
const home = require('../examples/src/pages/home/index.vue')
console.log(home)
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(4)).to.be.equal(-1)
    });
  });
});