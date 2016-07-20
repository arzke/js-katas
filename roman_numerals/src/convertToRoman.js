const numbers = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D'
};

function convertToRoman(number) {
    return numbers[number];
}

export default convertToRoman;