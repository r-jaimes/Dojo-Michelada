class PhoneNumber {
  digits;
  constructor(input = []) {
    if (input.length != 10) throw 'Phone number must be 10 digits long';                        // must be 10 characters/numbers long.
    if (input.some(n => (typeof n != 'string' && typeof n != 'number')                          // must be a string or a number.
      || (typeof n != 'number' && !n)                                                           // must not be empty.
      || (typeof n == 'number' && isNaN(n)))) throw 'only string and number types allowed';     // must not be NaN.
    if (input.some(n => String(n).length != 1)) throw 'invalid format';                         // must be single characters/digits per index.
    this.digits = this.cleanup(input);
  }

  build() {
    return this.digits.reduce((accumulator, number) => accumulator.replace('x', number), '(xxx) xxx-xxxx');
  }

  cleanup(input) {
    return input.map(n => this.isNumber(n) ? n : this.findNumber(n.toLowerCase()))
  }

  isNumber(x) {
    return !isNaN(parseInt(x));
  }

  findNumber(n) {
    const numberMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
      '0': ' '
    };
    return Object.keys(numberMap).find(key => numberMap[key].indexOf(n) !== -1) || '1';
  }
}

module.exports = PhoneNumber;