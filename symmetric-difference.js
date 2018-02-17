
function sym(args) {
  
  
  // hold symetric difference
  var storedArr = [];
  
    
  // loop through earch arg in args
  for (var arg = 0; arg< arguments.length; arg++) {
    console.log(arg,arguments[arg],storedArr);
    // for each number in arg
    for (var num =0; num< arguments[arg].length;num++) {
      console.log(arguments[arg][num]);
      // if number exists in stored arr
      if (storedArr.includes(arguments[arg][num])) {
        // splice it
        storedArr.splice(storedArr.indexOf(arguments[arg][num]),1);
      }
      
      // else 
      else {
        // push it
        storedArr.push(arguments[arg][num]);
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
