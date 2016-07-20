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

    describe('when it gets 10', function () {
        it('should return X', function () {
            convertToRoman(10).should.eql('X');
        });
    });

    describe('when it gets 50', function () {
        it('should return L', function () {
            convertToRoman(50).should.eql('L');
        });
    });
});