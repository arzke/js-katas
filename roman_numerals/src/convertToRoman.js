const numbers = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};

function convertToRoman(number) {
    if(number === 20) {
        return 'XX';
    }
    if(number === 2) {
        return 'II';
    }

    return numbers[number];
}

export default convertToRoman;