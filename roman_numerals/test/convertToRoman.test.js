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

        describe('when it gets 200', function () {
            it('should return CC', function () {
                convertToRoman(200).should.eql('CC');
            });
        });

        describe('when it gets 3', function () {
            it('should return III', function () {
                convertToRoman(3).should.eql('III');
            });
        });

        describe('when it gets 30', function () {
            it('should return XXX', function () {
                convertToRoman(30).should.eql('XXX');
            });
        });
    });

    describe('for compound numbers', function () {
        describe('when it gets 11', function () {
            it('should return XI', function () {
                convertToRoman(11).should.eql('XI');
            });
        });

        describe('when it gets 12', function () {
            it('should return XII', function () {
                convertToRoman(12).should.eql('XII');
            });
        });

        describe('when it gets 21', function () {
            it('should return XXI', function () {
                convertToRoman(21).should.eql('XXI');
            });
        });

        describe('when it gets 22', function () {
            it('should return XXII', function () {
                convertToRoman(22).should.eql('XXII');
            });
        });
    });
});