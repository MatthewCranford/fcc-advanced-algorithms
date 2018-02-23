
function permAlone(str) {
  
  var strArr = str.split('');
  var tempArr = [];
  var firstLetter;
  
  console.log("strArr:",strArr);
  
  // for each letter in strArr
  for (var letter=0; letter<strArr.length; letter++) {
    console.log("for letter:",strArr[letter]);

    for (var perm=letter+1; perm<strArr.length; perm++) {
     console.log("perm:",strArr[perm]);
    }
  }
    
  
  
  
  
  
  
  return str;
}

permAlone('aab');
