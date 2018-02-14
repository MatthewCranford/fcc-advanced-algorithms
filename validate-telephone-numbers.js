
function telephoneCheck(str) {
  // Good luck!
  var re = new RegExp(/\d+|^\(\d+\)|1+/, 'g');
  console.log(re.test(str));
  if (re.test(str)) {
    return true;
  }
  return false;
}



telephoneCheck("555-555-5555");
