function add(numStr) {
    if (numStr === '') return 0;

    if (!numStr.includes(',') && !numStr.includes('\n')) return parseInt(numStr, 10);

    let delimiter = /[\n,]/;
    if (numStr.startsWith("//[")) {
        const match = numStr.match(/^\/\/(\[.*?\]+)\n(.*)/);
        if (match) {
            delimiter = new RegExp(
                match[1]
                    .split('][') // Splitting multiple delimiters
                    .map(d => d.replace(/[\[\]]/g, '')) // Removing square brackets
                    .map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')) // Escaping regex special characters
                    .join('|') // Joining for regex
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
