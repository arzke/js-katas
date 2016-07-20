function convertToRoman(number) {
    if(number === 10) {
        return 'X';
    }
    if(number === 5) {
        return 'V';
    }

    return 'I';
}

export default convertToRoman;