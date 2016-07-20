import convertToRoman from '../src/convertToRoman'

describe('convertToRoman()', function () {
    describe('when it gets 1', function () {
        it('should return I', function () {
            convertToRoman(1).should.eql('I');
        });
    });

    describe('when it gets 5', function () {
        it('should return V', function () {
            convertToRoman(5).should.eql('V');
        });
    });
});