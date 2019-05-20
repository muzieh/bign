const BigN = require('../src/BigN');
const should = require('chai').should();

describe('BigN', function () {
	describe('import library', function () {
		it('should return object', function () {
			(typeof BigN).should.equals('function');	
		})	
	});
	
	describe('initialize object', function () {
		describe('zero', function () {
			it('zero returns 0 string', function () {
				const zero = BigN.zero();
				zero.toString().should.equals('0');
			});
			it('crate object with 0 int value', function() {
				(new BigN(0)).toString().should.equals('0')
			});
			it('crate object without parameter', function() {
				(new BigN()).toString().should.equals('0')
			});
			
		});
		
		describe('non zero', function() {
			it('crate object with int 54 value', function() {
				(new BigN(54)).toString().should.equals('54')
			});
			it('crate object with negative parameter', function() {
				(new BigN(-983)).toString().should.equals('-983')
			});
			
			it('should handle initialisation from string', function() {
				const strNumber = '12345678';
				(new BigN(strNumber)).toString().should.equals(strNumber);
			});
			
			it('should handle initialisation from big string', function() {
				const strNumber = '123456789012345678901234567890';
				(new BigN(strNumber)).toString().should.equals(strNumber);
			});
			
		})
	});
	
	describe('instance comparition', function() {
		it('same instance should be equal', function() {
			const num1 = new BigN(10);
			(num1.equals(num1)).should.be.true;
		});
		it('same value different instance should be equal', function() {
			
		});
		it('different value should not be equal', function() {
		});
	})
	
	
});