
function pairwise(arr, arg) {
  
  var total = 0;
  var usedArr = [];
  
  console.log("arr", arr,
              "arg", arg);

  // for each index of arr
  arr.forEach(function(item) {
    
    console.log("each item", item);
    
    // reduce
    arr.reduce(function(acc,val,index) {
      
      
      
      if (index > arr.indexOf(acc)) {
        console.log(
        "acc",acc,
        "val",val,
        "index",index
        );
        
        if (acc + val === arg) {

          if (!(usedArr.includes(arr.indexOf(acc)) || usedArr.includes(arr.indexOf(val,index)))) {
            total += (arr.indexOf(acc) + arr.indexOf(val,index));
            usedArr += arr.indexOf(acc);
            usedArr += arr.indexOf(val,index);
            console.log(
              "acc+val =", acc + val,
              "index of acc:", arr.indexOf(acc),
              "index of val:", arr.indexOf(val,arr.indexOf(acc)+1),
              "total", total
            ); 
          }
          
       

        }
      }
      
      
      return acc;
      
               
 
    }, item);
    
    
  });
  
 
  
  
  
  
  return total;
}

// pairwise([1, 1, 1], 2);
pairwise([1,4,2,3,0,5], 7);
