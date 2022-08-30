/*
* Attempted to fill a string using each index of the array.
* Realized it can be iterated instead.
*/
const firstAttempt = x => {
  let i = 0;
  return `(${x[i++]}${x[i++]}${x[i++]}) ${x[i++]}${x[i++]}${x[i++]}-${x[i++]}${x[i++]}${x[i++]}${x[i++]}`;
}

/*
* Use a reducer to replace each number in its right spot.
*/
const createPhoneNumber = x => {
  return x.reduce((accumulator, number) => (accumulator.replace('x', number)), '(xxx) xxx-xxxx');
}

