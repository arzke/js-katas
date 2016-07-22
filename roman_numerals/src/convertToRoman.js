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
    if(number === 0) {
        return '';
    }

    let closestNumber = getNumber(number, numbers);
    return numbers[closestNumber] + convertToRoman(number - closestNumber);
}

function getNumber(number, numbers) {
    let smallerNumbers = Object.keys(numbers).filter(n => n <= number);
    return Math.max.apply(null, smallerNumbers);
}

export default convertToRoman;