const chai = require('chai');
const expect = chai.expect;

const formatInTitleCase = require('../src/formatInTitleCase.js');

describe('formatInTitleCase', function() {
    it('should capitalize the first letter in every word', function() {
        expect(formatInTitleCase('an hour ago')).to.equal('An Hour Ago');
        expect(formatInTitleCase('2 minutes ago')).to.equal('2 Minutes Ago');
        expect(formatInTitleCase('catDog')).to.equal('CatDog');
    })

    it('should return null if given null/undefined', function() {
        expect(formatInTitleCase(null)).to.equal(null);
        expect(formatInTitleCase(undefined)).to.equal(null);
    });

    it('should throw if given a non-string', function() {
        expect(() => formatInTitleCase(2)).to.throw('Given a non-string: 2');
        expect(() => formatInTitleCase({})).to.throw('Given a non-string: [object Object]');
    });
});
