function add(numStr) {
    if (numStr === '') return 0;

    if (!numStr.includes(',') && !numStr.includes('\n')) return parseInt(numStr, 10);

    let delimiter = /[\n,]/;
    if (numStr.startsWith("//[")) {
        const match = numStr.match(/^\/\/(\[.*?\]+)\n(.*)/);
        if (match) {
            delimiter = new RegExp(
                match[1]
                    .split('][') // Split multiple delimiters like [***][%%]
                    .map(d => d.replace(/[\[\]]/g, '')) // Remove square brackets
                    .map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')) // Escape special regex characters
                    .join('|') // Join them with "|"
            );
            numStr = match[2];
        }
    }

    const numStrArray = numStr.split(delimiter).map(Number);
    const negatives = numStrArray.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    return numStrArray.filter(num => num <= 1000).reduce((sum, val) => sum + val, 0);
}

module.exports = add;
