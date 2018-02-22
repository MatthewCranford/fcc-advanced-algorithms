
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  var tempArr = [];
  var notFound;

  // for each item in newInv
  for (var newItem = 0; newItem < arr2.length; newItem++) {
    notFound = true;
    
    // for each item in curInv 
    for (var curItem = 0; curItem < arr1.length; curItem++) {
      
      // if item exists push inventory number
      if (arr1[curItem].includes(arr2[newItem][1])) {
        arr1[curItem][0] += arr2[newItem][0];
        notFound = false;
        break;
      }  
    }
    
    // push item to current inventory if not found
    if (notFound) {
      arr1.push([arr2[newItem][0],arr2[newItem][1]]);
    } 
  }
    

  // sort array alphabetically
  arr1.sort(function(a,b) {
    if (a[1] === b[1]) {
      return 0;
    }
    else if (a[1] < b[1]) {
      return -1;
    }
    else {
      return 1;
    }
  });
  return arr1;

}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
