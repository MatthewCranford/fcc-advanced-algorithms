
function pairwise(arr, arg) {
  

  // for each index of arr
  arr.forEach(function(item) {
    
    console.log("each item", item);
    
    // reduce
    arr.reduce(function(acc,val) {
      
      console.log(
        "acc",acc,
        "val",val,
        "item",item);
      
      if (acc + val === arg) {
        return 
      }
      
               
    return;
    }, item);
    
  });
  
 
  
  
  
  
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
