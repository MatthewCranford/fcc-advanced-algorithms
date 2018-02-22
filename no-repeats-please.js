
function permAlone(str) {
  
  var strArr = str.split('');
  var tempArr = [];
  
  console.log(strArr);
  // for each letter in strArr
  for (var letter=0; letter<strArr.length; letter++) {
    console.log(strArr[letter]);
    tempArr.push(strArr[letter]);
  }
  
  console.log(strArr); 
  
  
  
  
  return str;
}

permAlone('aab');
