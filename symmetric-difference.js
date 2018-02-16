
function sym(args) {
  var test = arguments[0].reduce(reducer);
  console.log(test);
  return args;
}

var reducer = function(accumulator, currentValue) {
  accumulator = [];
  return accumulator.push(currentValue);
};

sym([1, 2, 3], [5, 2, 1, 4]);