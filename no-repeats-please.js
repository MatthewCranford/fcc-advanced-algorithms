
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

}

function findPerm(strArr, countArr, resultArr, level) {
  
  // if level === strArr.length
  if (level === strArr.length) {
    // return resultArr
    console.log(resultArr);
    return;
  }
  // for each letter in strArr
  for (var i = 0; i < strArr.length; i++) {
    // if letter !== 0 
    if (countArr[i] !== 0) {

      // add it resultArr
      resultArr[level]=strArr[i];

      // countArr --
      countArr[i]--;

      // level ++
      level++;

      // call next level of recursion
      findPerm(strArr, countArr, resultArr, level);

      // countArr ++
      countArr[i]++;

    }      
  }
      
}

permAlone('aab');
