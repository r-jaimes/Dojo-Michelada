const assert = require('assert');
const PhoneNumber = require('./createPhoneNumber');

describe('PhoneNumer', function () {
  describe('#build()', function () {
    it('should build phone number from array of numbers', function () {
      assert.equal(new PhoneNumber([1,2,3,4,5,6,7,8,9,0]).build(), '(123) 456-7890');
      assert.equal(new PhoneNumber([3,1,2,4,5,6,7,8,9,0]).build(), '(312) 456-7890');
    });
    it('should build phone number from array of characters', function () {
      assert.equal(new PhoneNumber(['¡','l','l','a','m','e',' ','y','a','!']).build(), '(155) 263-0921');
    });
    it('should build phone number from array of characters and numbers', function () {
      assert.equal(new PhoneNumber([3,1,2,'l','l','a','m','e','y','a']).build(), '(312) 552-6392');
    });
  });
});