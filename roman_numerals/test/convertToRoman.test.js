import convertToRoman from '../src/convertToRoman'

describe('convertToRoman() =>', () => {
    describe('for simple numbers', () => {
        describe('when it gets 1', () => {
            it('should return I', () => {
                convertToRoman(1).should.eql('I');
            });
        });

        describe('when it gets 5', () => {
            it('should return V', () => {
                convertToRoman(5).should.eql('V');
            });
        });

        describe('when it gets 10', () => {
            it('should return X', () => {
                convertToRoman(10).should.eql('X');
            });
        });

        describe('when it gets 50', () => {
            it('should return L', () => {
                convertToRoman(50).should.eql('L');
            });
        });

        describe('when it gets 100', () => {
            it('should return C', () => {
                convertToRoman(100).should.eql('C');
            });
        });

        describe('when it gets 500', () => {
            it('should return D', () => {
                convertToRoman(500).should.eql('D');
            });
        });

        describe('when it gets 1000', () => {
            it('should return M', () => {
                convertToRoman(1000).should.eql('M');
            });
        });
    });

    describe('for repeated numbers', () => {
        describe('when it gets 2', () => {
            it('should return II', () => {
                convertToRoman(2).should.eql('II');
            });
        });

        describe('when it gets 20', () => {
            it('should return XX', () => {
                convertToRoman(20).should.eql('XX');
            });
        });

        describe('when it gets 200', () => {
            it('should return CC', () => {
                convertToRoman(200).should.eql('CC');
            });
        });

        describe('when it gets 3', () => {
            it('should return III', () => {
                convertToRoman(3).should.eql('III');
            });
        });

        describe('when it gets 30', () => {
            it('should return XXX', () => {
                convertToRoman(30).should.eql('XXX');
            });
        });
    });

    describe('for compound numbers', () => {
        describe('when it gets 11', () => {
            it('should return XI', () => {
                convertToRoman(11).should.eql('XI');
            });
        });

        describe('when it gets 12', () => {
            it('should return XII', () => {
                convertToRoman(12).should.eql('XII');
            });
        });

        describe('when it gets 21', () => {
            it('should return XXI', () => {
                convertToRoman(21).should.eql('XXI');
            });
        });

        describe('when it gets 22', () => {
            it('should return XXII', () => {
                convertToRoman(22).should.eql('XXII');
            });
        });

        describe('when it gets 6', () => {
            it('should return VI', () => {
                convertToRoman(6).should.eql('VI');
            });
        });

        describe('when it gets 4', () => {
            it('should return IV', () => {
                convertToRoman(4).should.eql('IV');
            });
        });

        describe('when it gets 9', () => {
            it('should return IX', () => {
                convertToRoman(9).should.eql('IX');
            });
        });
    });
});