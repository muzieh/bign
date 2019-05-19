var should = require('chai').should();

function FooAdd(a, b) {
  return a + b; 
}

describe('FooAdd', function () {
   it('2 + 2 is 4', function () {
      FooAdd(2,2).should.equal(4); 
   }) 
})