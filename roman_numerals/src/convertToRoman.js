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
    if(number === 11) {
        return 'XI';
    }

    return numbers[number] || getClosestSmallerNumber(number, numbers).repeat(number.toString().charAt(0));
}

function getClosestSmallerNumber(number, numbers) {
    let smallerNumbers = Object.keys(numbers).filter(n => n < number);
    return numbers[Math.max.apply(null, smallerNumbers)];
}

export default convertToRoman;