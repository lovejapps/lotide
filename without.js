const without = function(sourceArray, removeArray) {
  let intermediateArray = sourceArray;
  let outputArray = intermediateArray.filter(function callBackFn(element) {
    return removeArray.indexOf(element) < 0; //Any element that meets the true condition remains in the filtered array.
  });
  return outputArray;
};

module.exports = without;
