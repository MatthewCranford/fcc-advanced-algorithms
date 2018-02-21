
function getTotal(cid) {
  // init total
  var total = 0;
  // loop through cid
 
  for(var cash=0; cash<cid.length; cash++){
    // add cash to total
    total += cid[cash][1];
  }
    
//   console.log("total", total);
  return total;
}

function getValue(string) {
  switch (string) {
    case "ONE HUNDRED": return 100.0;
    case "TWENTY": return 20.0;
    case "TEN":  return 10.0;
    case "FIVE": return 5.0;
    case "ONE":  return 1.0;
    case "QUARTER": return 0.25;
    case "DIME": return 0.10;
    case "NICKEL": return 0.05;
    case "PENNY": return 0.01;
  }
}

function checkCashRegister(price, cash, cid) {
  console.log("New Test:");
  var change = [];
  // due = price - cash
  var due = cash - price;

  // Here is your change, ma'am.
  
  // if due === cid total
  if( due === getTotal(cid)) {
    return "Closed";
  }
   
  // else if due > cid total
  else if(due > getTotal(cid)) {
    return "Insufficient Funds";
  }
  
  
  else {
    // hold's each currency's monetary "value"
    var value, divide;
    
    // for each currency in drawer starting from highest
    for (var currency=cid.length-1; currency>=0; currency--) {
      
      value = getValue(cid[currency][0]);
      
      // break if due is 0
      if (due === 0) {
        break;
      }
      
      // check due is greater than the value of the currency in cid index
      else if (due >= value && cid[currency][1] >= value ) {
        console.log("value",value,"due",due,"type",cid[currency][0],"amount",cid[currency][1],"Divide",due/value,"Remainder",due%value);
        
        // find divide
        divide = Math.floor(due/value);
        console.log(divide);
        
        // if amount is available
        if (divide * value <= cid[currency][1]) {

          // set due to remainder of max divide
          due = Number((due%(divide*value)).toFixed(2));
          
          // add amount used to change array
          change.push([cid[currency][0],divide*value]);
        }
        else {
          
          // set due to remainder of the total amount
          due = Number((due % cid[currency][1]).toFixed(2));
          
          // add amount used to change array
          change.push([cid[currency][0],cid[currency][1]]);
        }    
      } 
      
    }
    if (due !== 0) {
      return "Insufficient Funds";
    }
    else {
      return change;  
    }
    
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
