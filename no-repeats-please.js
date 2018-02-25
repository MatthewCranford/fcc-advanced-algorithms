var test = [];

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

  
  // call findPerm function
  findPerm(strArr, countArr, resultArr, 0);
  // pass strArr, countArr, resultArr, level
  
  console.log("results:", resultArr);
  return test;

}

function findPerm(strArr, countArr, resultArr, level) {
  

  // if level === strArr.length
  if (level === strArr.length) {
    // return resultArr
    
    resultArr = resultArr.join('').split(" ");
//     console.log("resultArr:", resultArr);
    test.push(resultArr);
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
    findPerm(strArr, countArr, resultArr, level + 1);

    // countArr ++
    countArr[i] += 1;
      
  }
      
}

permAlone('aab');
