const chai = require('chai');
const expect = chai.expect;

const formatWithCommas = require('../src/formatWithCommas.js');

describe('formatWithCommas', function() {
    it('should not join arrays with one item', function() {
        expect(formatWithCommas(['Apple'], 'and')).to.equal('Apple');
    });

    it('should join arrays with two items', function() {
        expect(formatWithCommas(['Apple', 'Banana'], 'and')).to.equal('Apple and Banana');
    });

    it('should join arrays with three items', function() {
        expect(formatWithCommas(['Apple', 'Banana', 'Carrot'], 'or')).to.equal('Apple, Banana or Carrot');
    });
});
