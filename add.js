function add(numStr) {
    //  empty str check
    if (numStr === '') {
        return 0;
      }
    //   return number itself
    if (!numStr.includes(',')) {
        return parseInt(numStr, 10);
      }

      // addition for two number
      return numStr.split(',').map(Number).reduce((sum, val) => sum + val, 0);


}


module.exports = add