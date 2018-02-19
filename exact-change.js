
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

function checkCashRegister(price, cash, cid) {
  var change = [
    [0.01],
    [0.05],
    [0.10],
    [0.25],
    [1],
    [5],
    [10],
    [20],
    [100]
  ];
  

  var due = cash - price;
  

  
  // add cid to change value arrays
  
  for (var item = 0; item < cid.length; item++) {
    change[item].push(cid[item][0],cid[item][1]);
  }
//   console.log(change);
  
  
  
  
  
//   console.log(due);
  // Here is your change, ma'am.
  
  // if due === cid total
  if( due === getTotal(cid)) {
    return "Closed";
  }
      
  // else if due > cid total
  else if(due > getTotal(cid)) {
    return "Insufficient Funds";
  }
      // return ""
  
  // else
    
    // due = price - cash
    // for each currency in drawer starting from highest
  
      // if due < current currency 
        // remainder of currency % due
        // if due === 0
            // break
      
  
 // return change
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

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
