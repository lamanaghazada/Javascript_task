// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const frequencyMap = {};
    let highestCount = 0;
    let mostFrequentChar = '';

    
    for (const char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    
    for (const char in frequencyMap) {
        if (frequencyMap[char] > highestCount) {
            highestCount = frequencyMap[char];
            mostFrequentChar = char;
        }
    }

    return mostFrequentChar;
}

module.exports = maxChar;

