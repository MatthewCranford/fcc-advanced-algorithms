
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired! Yes Sir.

  // for each item in newInv
  for (var newItem = 0; newItem < arr2.length; newItem++) {
    
    // for each item in curInv 
    for (var curItem = 0; curItem < arr1.length; curItem++) {
      
      // if item exists push inventory number
      if (arr1[curItem].includes(arr2[newItem][1])) {
        console.log("curInv includes:",arr1[curItem][0], arr2[newItem][1]);
      }
      // else push new item
    }
    
  }

    

  // sort array alphabetically
  
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
