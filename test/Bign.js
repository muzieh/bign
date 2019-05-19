const bigN = require('../src/BigN');
const should = require('chai').should();

describe('BigN', function () {
	describe('import library', function () {
		it('should return object', function () {
			(bigN).should.not.be.empty;	
		})	
	});
	
	describe('initialize object', function () {
		describe('zero', function () {
			it('zero returns 0 string', function () {
				(bigN.zero).toString().should.equals('0');
			});
			it('crate object with 0 int value', function() {
				(bigN.create(0)).toString().should.equals('0')
			});
			it('crate object without parameter', function() {
				(bigN.create()).toString().should.equals('0')
			});
			
		});
		
		describe('non zero', function() {
			it('crate object with int 54 value', function() {
				(bigN.create(54)).toString().should.equals('54')
			});
			it('crate object with negative parameter', function() {
				(bigN.create(-983)).toString().should.equals('-983')
			});
			
		})
	});
	
	describe('instance comparition', function() {
		it.skip('same instance should be equal', function() {
			const num1 = bigN.create(10);
			(num1.equals(num1)).should.be.true;
		});
		it('same value different instance should be equal', function() {
			
		});
		it('different value should not be equal', function() {
		});
	})
	
	
});