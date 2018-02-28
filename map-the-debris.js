
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  var height = arr[0].avgAlt;
  var a = earthRadius + height;
  console.log("a=",a);
  var result = Math.pow(a,3) / GM;
  console.log("result",result);
  var resultTwo = Math.sqrt(result);
  console.log("resultTwo",resultTwo);
 

  
  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
