
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  
  // return full name
  this.getFullName = function() {
    return firstAndLast;
  };
  
  // return first name
  this.getFirstName = function() {
    var first = firstAndLast.split(' ')[0];
    return  first; 
  };
  
  // return last name
  this.getLastName = function() {
    var last =  firstAndLast.split(' ')[1];
    return last; 
  };
  
  // reassign first name
  this.setFirstName = function(first) {
    var nameArr =  firstAndLast.split(' ');
    nameArr[0] = first;
    firstAndLast = nameArr.join(" ");
    return firstAndLast; 
  };
  
  // reassign last name
  this.setLastName = function(last) {
    var nameArr =  firstAndLast.split(' ');
    nameArr[1] = last;
    firstAndLast = nameArr.join(" ");
    return firstAndLast;  
  };
  
  // reassign full name
  this.setFullName = function(newFirstAndLast) {
    firstAndLast = newFirstAndLast;
    return firstAndLast; 
  };
  
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

