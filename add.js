function add(numStr) {
    // Empty string check
    if (numStr === '') {
        return 0;
    }

    // Return number itself
    if (!numStr.includes(',')) {
        return parseInt(numStr, 10);
    }

    // Delimiter checks  
    let delimiter = /[\n,]/;
    if (numStr.startsWith('//')) {
        const match = numStr.match(/^\/\/(.+)\n(.*)/);
        if (match) {
            delimiter = new RegExp(match[1]);
            numStr = match[2];
        }
    }

    const numStrArray = numStr.split(delimiter).map(Number);
    const negatives = numStrArray.filter(num => num < 0);

    // Step 5: Negative number check
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    // Step 7: Ignore numbers greater than 1000
    return numStrArray.filter(num => num <= 1000).reduce((sum, val) => sum + val, 0);
}

module.exports = add;
