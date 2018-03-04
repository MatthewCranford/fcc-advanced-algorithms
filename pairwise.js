
function pairwise(arr, arg) {
  
  var total = 0;
  var usedArr = [];
  var accIndex = 0;
  
  console.log("arr", arr,
              "arg", arg);

  // for each index of arr
  arr.forEach(function(item) {
    
    
    console.log("each item", item);
    
    // reduce
    arr.reduce(function(acc,val,index) {
      
      
      
      if (index > arr.indexOf(acc,accIndex)) {
        
        console.log(
        "acc",acc,
        "val",val,
        "index",index
        );
        
        if (acc + val === arg) {

          if (!(usedArr.includes(arr.indexOf(acc,accIndex)) || usedArr.includes(arr.indexOf(val,index)))) {
         
            total += (accIndex + arr.indexOf(val,index));
            usedArr.push(arr.indexOf(acc, accIndex));
            usedArr.push(arr.indexOf(val,index));
            
            console.log(
              "acc index", arr.indexOf(acc,accIndex),
              "val index", arr.indexOf(val,arr.indexOf(val,index)),
              "total", total,
              "usedArr", usedArr
            ); 
          }
          
        }
        
      }
      
      
      return acc;
      
               
 
    }, item);
    accIndex += 1;
    
    
  });
  
 
  
  
  
  
  return total;
}

// pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([1, 1, 1], 2);
// pairwise([1,4,2,3,0,5], 7);
