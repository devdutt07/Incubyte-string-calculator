function add(numStr) {
    //  empty str check
    if (numStr === '') {
        return 0;
      }
    //   return number itself
    if (!numStr.includes(',')) {
        return parseInt(numStr, 10);
      }

}


module.exports = add