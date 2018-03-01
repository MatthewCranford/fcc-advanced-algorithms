
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  // for each object in array
  for (var item = 0; item < arr.length; item++) {
    // set height to property value
    var height = arr[item].avgAlt;
    
    // run calc
    var a = earthRadius + height;
    var t = Math.round((2 * Math.PI) * (Math.sqrt(Math.pow(a,3) / GM))); 
    // replace property with orb period
    delete arr[item].avgAlt;
    arr[item].orbitalPeriod = t;
  }

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
