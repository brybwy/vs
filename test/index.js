var expect = require('chai').expect,
	v = require('../index');

describe('test \'version\' function', function() {
	it('test with a valid file and valid format', function(done) {
		v.version(function(result){
			expect(result).to.equal('1.0.0');
			done();
		});
	});
	it('test with a unexisting package file', function(done) {
		v.version(function(result){
			expect(result).to.equal('Error in opening package.json Error: ENOENT, open \'../package.json\'');
			done();
		}, '../package.json');
	});
	it('test with a package file but invalid format', function(done) {
		v.version(function(result){
			expect(result).to.equal('Error in parsing package.json SyntaxError: Unexpected token v');
			done();
		}, './index.js');
	});
});

describe('test \'status\' function', function() {
	it('test with a default message', function() {
		expect(v.status()).to.equal('Ok')
	});

	it('test with a message', function() {
		expect(v.status('test')).to.equal('test')
	});
});
