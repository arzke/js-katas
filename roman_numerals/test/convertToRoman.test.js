import convertToRoman from '../src/convertToRoman'

describe('convertToRoman()', function () {
    describe('for simple numbers', function () {
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

        describe('when it gets 100', function () {
            it('should return C', function () {
                convertToRoman(100).should.eql('C');
            });
        });

        describe('when it gets 500', function () {
            it('should return D', function () {
                convertToRoman(500).should.eql('D');
            });
        });

        describe('when it gets 1000', function () {
            it('should return M', function () {
                convertToRoman(1000).should.eql('M');
            });
        });
    });

    describe('for repeated numbers', function () {
        describe('when it gets 2', function () {
            it('should return II', function () {
                convertToRoman(2).should.eql('II');
            });
        });

        describe('when it gets 20', function () {
            it('should return XX', function () {
                convertToRoman(20).should.eql('XX');
            });
        });
    });
});