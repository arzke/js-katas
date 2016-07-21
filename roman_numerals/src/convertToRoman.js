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
    let suffix = '';
    if(number > 10 && number % 10 !== 0) {
        let newNumber = Math.floor(number/10);
        suffix = numbers[newNumber] || getClosestSmallerNumber(newNumber, numbers);
    }

    return numbers[number] || getClosestSmallerNumber(number, numbers).repeat(number.toString().charAt(0)) + suffix;
}

function getClosestSmallerNumber(number, numbers) {
    let smallerNumbers = Object.keys(numbers).filter(n => n < number);
    return numbers[Math.max.apply(null, smallerNumbers)];
}

export default convertToRoman;