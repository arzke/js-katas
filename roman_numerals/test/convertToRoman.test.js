import convertToRoman from '../src/convertToRoman'

describe('convertToRoman()', function () {
    describe('when it gets 1', function () {
        it('should return I', function () {
            convertToRoman(1).should.eql('I');
        });
    });
});