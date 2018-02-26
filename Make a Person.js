
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    var first = firstAndLast.split(' ')[0];
    return  first; 
  };
  this.getLastName = function() {
    var last =  firstAndLast.split(' ')[1];
    return last; 
  };
  
  
  this.setFirstName = function(first) {
    
    var nameArr =  firstAndLast.split(' ');
    nameArr[0] = first;
    narArr.join(" ");
    console.log(nameArr);
  
    return  curFirst; 
  };
  this.setLastName = function(last) {

    return; 
  };
  this.setFirstAndLast = function(firstAndLast) {

    return; 
  };
  

  

  
  
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log("keys:",Object.keys(bob).length);
