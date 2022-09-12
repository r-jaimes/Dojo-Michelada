const { assert } = require('chai');
const PhoneNumber = require('./createPhoneNumber');

describe('PhoneNumber', function () {
  describe('#build()', function () {
    it('should build phone number from array of numbers', function () {
      assert.equal(new PhoneNumber([1,2,3,4,5,6,7,8,9,0]).build(), '(123) 456-7890');
      assert.equal(new PhoneNumber([3,1,2,4,5,6,7,8,9,0]).build(), '(312) 456-7890');
    });
    it('should build phone number from array of characters', function () {
      assert.equal(new PhoneNumber(['¡','l','l','a','m','e',' ','y','a','!']).build(), '(155) 263-0921');
      assert.equal(new PhoneNumber(['3','1','2','l','l','a','m','e','y','a']).build(), '(312) 552-6392');
    });
    it('should build phone number from array of characters and numbers', function () {
      assert.equal(new PhoneNumber([3,1,2,'l','l','a','m','e','y','a']).build(), '(312) 552-6392');
    });
    it('should accept exactly 10 digits', function () {
      assert.throws(() => new PhoneNumber([1,2,3,4,5,6,7]).build(),'Phone number must be 10 digits long');
      assert.throws(() => new PhoneNumber([1,2,3,4,5,6,7,8,9,0,0,0,0,0]).build(),'Phone number must be 10 digits long');
    });
    it('should not accept more than 1 digit/character per index', function () {
      assert.throws(() => new PhoneNumber([1,2,3,4,5,6,7,80,99,0]).build(),'Invalid format');
    });
    it('should accept only string and integer values', function () {
      assert.throws(() => new PhoneNumber([1.4,2,3,4,5,6,7,8,9,0]).build(),'Invalid format');
      assert.throws(() => new PhoneNumber([1,2,3,4,5,6,7,8,9,{foo:'bar'}]).build(),'Only string and number types allowed');
      assert.throws(() => new PhoneNumber([1,2,3,4,5,6,7,8,9,NaN]).build(),'Only string and number types allowed');
      assert.throws(() => new PhoneNumber([1,2,3,4,5,6,7,8,9,null]).build(),'Only string and number types allowed');
      assert.throws(() => new PhoneNumber([1,2,3,4,5,6,7,8,9,undefined]).build(),'Only string and number types allowed');
    });
  });
});