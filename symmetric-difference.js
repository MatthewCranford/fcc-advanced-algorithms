
function sym(args) {
  
  
  // hold symetric difference
  var storedArr = [];
  var tempArr;
  
    
  // loop through earch arg in args
  for (var arg = 0; arg< arguments.length; arg++) {
    console.log(arg,arguments[arg],storedArr);
    tempArr = [];
    // for each number in arg
    for (var num = 0; num< arguments[arg].length;num++) {
      console.log(arguments[arg][num]);
      // avoid duplicates
      if (tempArr.includes(arguments[arg][num])) {
        continue;
      }
      
      // else 
      else {
        // push to temp array
        tempArr.push(arguments[arg][num]);
      }
        
    }
    // loop over temp array
    for (var item = 0; item < tempArr.length; item++) {
      if(storedArr.includes(tempArr[item])) {
        // splice non symmetric difference
        storedArr.splice(storedArr.indexOf(tempArr[item]),1);
      }
      else {
        // push symmetric difference to stored array
        storedArr.push(tempArr[item]);
      }
    }
    
      

  }
  
  return storedArr;
  
//   var reduced = arguments[i].reduce.call(arguments,function (total,arr) {
//     console.log(total,arr);
//     if (!total.includes(arr)) {
//         total.push(arr);
//     }
//     else {
//       total.pop(arr); 
//     }
    
//     return total;
//   },[]);
  
 



}



// sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
