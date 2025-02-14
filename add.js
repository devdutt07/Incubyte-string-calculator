function add(numStr) {
    //  empty str check
    if (numStr === '') {
        return 0;
      }
    //   return number itself
    if (!numStr.includes(',')) {
        return parseInt(numStr, 10);
      }

      // delimiter checks  
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
  
    //   step 5 negative check
      if (negatives.length > 0) {
          throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
      }
  
      return numStrArray.reduce((sum, val) => sum + val, 0); 
       
}


module.exports = add