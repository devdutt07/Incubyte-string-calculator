function add(numStr) {
    //  empty str check
    if (numStr === '') {
        return 0;
      }
    //   return number itself
    if (!numStr.includes(',')) {
        return parseInt(numStr, 10);
      }

      //addition of numbers and handled comma and other cases 
      return numStr.split(/[\n,]/).map(Number).reduce((sum, val) => sum + val, 0);
       
}


module.exports = add