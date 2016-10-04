function reduce(arr, fn, initial) {
    if (!arr.length) return initial
    n = fn(initial,arr[0]);
      var end = arr.slice(1);
      return reduce(end,fn,n);
    }


function countWords(inputWords) {

    return reduce(inputWords,function(countMap, word) {
      countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
      return countMap
    }, {})
     // second argument to reduce initialises countMap to {}
  }

module.exports = countWords
