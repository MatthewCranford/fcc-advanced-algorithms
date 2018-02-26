
function permAlone(str) {
  
  // each letter of string
  var strArr = str.split('');
  console.log("strArr:",strArr);
  
  // give each letter a value of 1
  var countArr = strArr.map(function() {
    return 1;
  });
  console.log("countArr: ",countArr);
  
  // hold each perm result
  var resultArr = [];
  var permArr = [];
  
  // call findPerm function
  findPerm(strArr, countArr, resultArr, 0, permArr);
  // pass strArr, countArr, resultArr, level
  
  console.log("results:", permArr);
  return findNoRepeatPerm(permArr);

}

function findPerm(strArr, countArr, resultArr, level, permArr) {
  

  // if level === strArr.length
  if (level === strArr.length) {
    // return resultArr
    
    resultArr = resultArr.join('').split(" ");
//     console.log("resultArr:", resultArr);
    permArr.push(resultArr);
    return;
  }
  // for each letter in strArr
  for (var i = 0; i < strArr.length; i++) {
    
    // if letter !== 0 
    if (countArr[i] === 0) {
      
      continue;
    }

    // add it resultArr
    resultArr[level] = strArr[i];
    // countArr --
    countArr[i] -= 1;
   
    // call next level of recursion
    findPerm(strArr, countArr, resultArr, level + 1, permArr);

    // countArr ++
    countArr[i] += 1; 
  }
      
}

function findNoRepeatPerm(permArr) {
  
  // total = 0
  var total = 0;
  // reg = //
  var reg = /\b(?:([a-z])(?!\1))+\b/;
  
  
  // for each item in permArr
  for (var perm = 0; perm < permArr.length; perm++) {
    // if item passes regex
    if (reg.test(permArr[perm])) {
       // total += 1
      total += 1;
    }   
  }  
   
  
  // return total
  return total;
    
}

permAlone('aab');
