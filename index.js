function iterativeLog(array) {
    array.forEach((element, index, array) => {
      console.log(`${index}: ${element}`);
    })
}

function iterate(callback) {
  var whatever = ['frogs', 'cats', 'dogs', 'cows', 'pigs'];
  whatever.forEach(callback);
  return whatever;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
