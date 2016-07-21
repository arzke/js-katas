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
    if(number < 1 && number % 10 === 0) {
        return '';
    }

    let romanNumeral = getNumber(number, numbers);

    if(romanNumeral.charAt(0) === 'V') {
        return romanNumeral + convertToRoman(number - 5);
    }

    return romanNumeral.repeat(numbers[number] ? 1 : number.toString().charAt(0)) + convertToRoman(+number.toString().substr(1));
}

function getNumber(number, numbers) {
    let smallerNumbers = Object.keys(numbers).filter(n => n <= number);
    return numbers[Math.max.apply(null, smallerNumbers)];
}

export default convertToRoman;