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

      //addition of numbers and handled comma and other cases 
      return numStr.split(delimiter).map(Number).reduce((sum, val) => sum + val, 0);
       
}


module.exports = add