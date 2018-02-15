
function telephoneCheck(str) {
  // Good luck!
  var patt = /^1?(\s)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;

  console.log(patt.test(str));

  return patt.test(str);
}



telephoneCheck("27576227382")
